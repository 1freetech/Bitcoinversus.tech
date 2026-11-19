#[derive(Debug, PartialEq, Eq)]
struct ChallengeRequest {
    version: u8,
    effort_bits: u8,
    nonce: u32,
}

#[derive(Debug, PartialEq, Eq)]
enum ParseError {
    ShortInput,
    UnsupportedVersion,
    InvalidEffort,
    TrailingBytes,
}

fn parse_request(input: &[u8]) -> Result<ChallengeRequest, ParseError> {
    let (&version, rest) =
        input.split_first().ok_or(ParseError::ShortInput)?;
    let (&effort_bits, payload) =
        rest.split_first().ok_or(ParseError::ShortInput)?;

    if version != 1 {
        return Err(ParseError::UnsupportedVersion);
    }
    if !(4..=20).contains(&effort_bits) {
        return Err(ParseError::InvalidEffort);
    }

    let nonce_bytes: [u8; 4] = payload
        .get(..4)
        .ok_or(ParseError::ShortInput)?
        .try_into()
        .map_err(|_| ParseError::ShortInput)?;
    if payload.len() != 4 {
        return Err(ParseError::TrailingBytes);
    }

    Ok(ChallengeRequest {
        version,
        effort_bits,
        nonce: u32::from_be_bytes(nonce_bytes),
    })
}

fn main() {
    for data in [
        &[1, 16, 0, 1, 7, 0][..],
        &[1, 16, 0][..],
        &[1, 32, 0, 1, 7, 0][..],
    ] {
        println!("{:?}", parse_request(data));
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_valid_request() {
        assert_eq!(
            parse_request(&[1, 16, 0, 1, 7, 0]),
            Ok(ChallengeRequest {
                version: 1, effort_bits: 16, nonce: 0x00010700
            })
        );
    }

    #[test]
    fn rejects_truncated_request() {
        assert_eq!(
            parse_request(&[1, 16, 0]),
            Err(ParseError::ShortInput)
        );
    }

    #[test]
    fn rejects_extra_bytes() {
        assert_eq!(
            parse_request(&[1, 16, 0, 1, 7, 0, 5]),
            Err(ParseError::TrailingBytes)
        );
    }
}

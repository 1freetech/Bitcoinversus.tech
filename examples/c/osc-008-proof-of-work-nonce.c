#include <stdint.h>
#include <stdio.h>
#include <string.h>
#include <openssl/evp.h>

static int has_zero_prefix(const unsigned char *digest, unsigned bits) {
    unsigned full_bytes = bits / 8;
    unsigned remaining = bits % 8;
    for (unsigned i = 0; i < full_bytes; ++i) {
        if (digest[i] != 0) return 0;
    }
    return remaining == 0 || (digest[full_bytes] >> (8 - remaining)) == 0;
}

int main(void) {
    const unsigned char challenge[] = "demo-only";
    const size_t challenge_len = sizeof challenge - 1;
    unsigned char message[64] = {0};
    unsigned char digest[EVP_MAX_MD_SIZE];
    unsigned digest_len = 0;

    if (challenge_len + 4 > sizeof message) return 1;
    memcpy(message, challenge, challenge_len);

    for (uint32_t nonce = 0; ; ++nonce) {
        message[challenge_len]     = (unsigned char)(nonce >> 24);
        message[challenge_len + 1] = (unsigned char)(nonce >> 16);
        message[challenge_len + 2] = (unsigned char)(nonce >> 8);
        message[challenge_len + 3] = (unsigned char)nonce;

        if (EVP_Digest(message, challenge_len + 4,
                       digest, &digest_len, EVP_sha256(), NULL) != 1)
            return 1;
        if (digest_len == 32 && has_zero_prefix(digest, 16)) {
            printf("nonce=%u first_digest_bytes=%02x%02x\n",
                   nonce, digest[0], digest[1]);
            return 0;
        }
        if (nonce == UINT32_MAX) break;
    }
    return 1;
}

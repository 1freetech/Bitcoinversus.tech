"""Regression checks for BitcoinVersus.Tech donation and chart semantics."""
from decimal import Decimal, InvalidOperation
from urllib.parse import parse_qs, urlsplit
import unittest

def qr_matches_destination(uri, expected_address, expected_sats=5000):
    """Require an exact address and exact integral satoshi amount in BIP-21."""
    parsed = urlsplit(uri)
    params = parse_qs(parsed.query, keep_blank_values=True)
    if parsed.scheme.lower() != "bitcoin" or not parsed.path or parsed.netloc:
        return False
    if set(params) != {"amount"} or len(params["amount"]) != 1:
        return False
    try:
        sats = Decimal(params["amount"][0]) * Decimal(100_000_000)
    except InvalidOperation:
        return False
    return parsed.path == expected_address and sats == expected_sats

def editorial_chart_eligible(chart_id, *, parts_of_single_total):
    """Block part-to-whole designs unless the dataset defines a genuine whole."""
    composition = {"donut", "waffle", "treemap", "sunburst", "percentBars", "stackedBars", "stackedArea"}
    return parts_of_single_total or chart_id not in composition

class EditorialGateTests(unittest.TestCase):
    def test_matching_address_and_five_thousand_satoshis(self):
        self.assertTrue(qr_matches_destination("bitcoin:address?amount=0.00005", "address"))
    def test_actual_original_qr_does_not_match_the_stated_address(self):
        self.assertFalse(qr_matches_destination(
            "bitcoin:bc1q3ur9wx5ppjp8snnyv70kt5m2je7utallvh5g58h62u27ahtlk6qsz3tx4u?amount=0.00005",
            "3C9o19EH5HSiwEPyCTmEKzxhNCbo2X6TTb"))
    def test_rejects_wrong_amount_missing_amount_and_duplicate_amount(self):
        for uri in ["bitcoin:address?amount=0.0005", "bitcoin:address", "bitcoin:address?amount=0.00005&amount=0.00005"]:
            with self.subTest(uri=uri):
                self.assertFalse(qr_matches_destination(uri, "address"))
    def test_targets_are_not_parts_of_a_total(self):
        for chart in ["donut", "waffle", "treemap", "percentBars"]:
            with self.subTest(chart=chart):
                self.assertFalse(editorial_chart_eligible(chart, parts_of_single_total=False))
        self.assertTrue(editorial_chart_eligible("bars", parts_of_single_total=False))
    def test_true_composition_remains_eligible(self):
        self.assertTrue(editorial_chart_eligible("donut", parts_of_single_total=True))

if __name__ == "__main__":
    unittest.main()

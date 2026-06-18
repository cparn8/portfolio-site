from datetime import datetime
from typing import Optional


def ranges_overlap(start_a: datetime, end_a: datetime, start_b: datetime, end_b: datetime) -> bool:

   if any(x is None for x in (start_a, end_a, start_b, end_b)):
       raise ValueError("All start/end values are required")

   if start_a >= end_a or start_b >= end_b:
       raise ValueError("Invalid range: start must be < end")

   return start_a < end_b and start_b < end_a

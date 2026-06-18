records = [
   {'id': 1, 'name': 'Alice'},
   {'id': 2, 'name': 'Bob'},
   {'id': 1, 'name': 'Alice'}, # Duplicate of the first
   {'id': 3, 'name': 'Charlie'},
   {'id': 2, 'name': 'Bob'}  # Duplicate of the second
]

seen_ids = set()
duplicates = []

for record in records:
   record_id = record['id']
   if record_id in seen_ids:
       if record not in duplicates:
           duplicates.append(record)
   else:
       seen_ids.add(record_id)

print(f"Duplicate records based on 'id': {duplicates}")

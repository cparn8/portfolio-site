from dataclasses import dataclass
from typing import Any, Dict, List, Optional


@dataclass(frozen=True)
class ValidationResult:
    is_valid: bool
    errors: Dict[str, str]


def validate_user_input(data: Optional[Dict[str, Any]]) -> ValidationResult:
    errors: Dict[str, str] = {}

    if data is None:
        return ValidationResult(False, {"__all__": "Input is required"})

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    age = data.get("age")

    if not isinstance(name, str) or not name.strip():
        errors["name"] = "Name is required"

    if not isinstance(email, str) or "@" not in email or "." not in email.split("@")[-1]:
        errors["email"] = "A valid email is required"

    if not isinstance(password, str) or len(password) < 8:
        errors["password"] = "Password must be at least 8 characters"

    if not isinstance(age, int):
        errors["age"] = "Age must be an integer"
    elif age < 18:
        errors["age"] = "Must be at least 18"

    return ValidationResult(is_valid=(len(errors) == 0), errors=errors)
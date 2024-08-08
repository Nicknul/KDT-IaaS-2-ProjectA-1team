from pydantic import BaseModel
from typing import List, Dict

class TableRequest(BaseModel):
    table: str

class CreateTableRequest(BaseModel):
    tableName: str
    sets: List[str]
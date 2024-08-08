from fastapi import APIRouter, HTTPException
from typing import List, Dict
from models import TableRequest, CreateTableRequest, UpdateRequest
from database import get_table_names, search_data_by_table_and_value
import sqlite3

table_router = APIRouter()

@table_router.get("/tables", response_model=List[str])
async def get_tables():
    try:
        tables = get_table_names('정호연.db')
        return tables
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

data_router = APIRouter()

@data_router.post("/data")
async def get_data(request: TableRequest):
    try:
        conn = sqlite3.connect('정호연.db')
        cursor = conn.cursor()
        cursor.execute(f'SELECT * FROM "{request.table}"')
        rows = cursor.fetchall()
        
        # id 열을 제외한 데이터를 반환
        columns = [description[0] for description in cursor.description]
        result = [{column: row[idx] for idx, column in enumerate(columns) if column != 'id'} for row in rows]

        conn.close()
        
        if not result:
            raise HTTPException(status_code=404, detail="Data not found")
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

create_table_router = APIRouter()

@create_table_router.post("/createTable")
async def create_table(request: CreateTableRequest):
    try:
        conn = sqlite3.connect('정호연.db')
        cursor = conn.cursor()
        
        # id 열을 추가하고 프라이머리 키로 설정
        columns = ', '.join([f'"{set_}" TEXT' for set_ in request.sets])
        create_table_sql = f'CREATE TABLE "{request.tableName}" (id INTEGER PRIMARY KEY AUTOINCREMENT, {columns})'
        
        cursor.execute(create_table_sql)
        
        # 공란의 값으로 기본 행 추가
        empty_values = ', '.join(['""' for _ in request.sets])
        insert_sql = f'INSERT INTO "{request.tableName}" ({", ".join([f'"{set_}"' for set_ in request.sets])}) VALUES ({empty_values})'
        cursor.execute(insert_sql)

        conn.commit()
        conn.close()
        
        return {"message": "테이블 생성 완료"}
    except sqlite3.Error as e:
        raise HTTPException(status_code=500, detail=f"테이블 생성 중 오류 발생: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"알 수 없는 오류 발생: {str(e)}")
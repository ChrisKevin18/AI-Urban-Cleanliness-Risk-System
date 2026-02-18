from fastapi import FastAPI
from pydantic import BaseModel
from backend.risk_engine import predict_risk


app = FastAPI()

class InputData(BaseModel):
    population: int
    rainfall: float
    complaints: int

@app.get("/")
def home():
    return {"message": "AI Urban Cleanliness Risk System API Running"}

@app.post("/predict")
def get_prediction(data: InputData):
    result = predict_risk(
        data.population,
        data.rainfall,
        data.complaints
    )
    return {"Risk Level": result}
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app:app", host="127.0.0.1", port=8000)

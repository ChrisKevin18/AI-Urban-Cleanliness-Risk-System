from fastapi import FastAPI
from pydantic import BaseModel
from backend.risk_engine import predict_risk

app = FastAPI()

class InputData(BaseModel):
    population: int
    rainfall: float
    complaints: int
    latitude: float
    longitude: float

@app.get("/")
def home():
    return {"message": "AI Urban Cleanliness Risk System Running"}

@app.post("/predict")
def get_prediction(data: InputData):
    result = predict_risk(
        data.population,
        data.rainfall,
        data.complaints
    )

    return {
        "risk_score": result["risk_score"],
        "risk_level": result["risk_level"],
        "latitude": data.latitude,
        "longitude": data.longitude
    }

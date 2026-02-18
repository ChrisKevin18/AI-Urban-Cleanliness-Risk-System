import joblib
import numpy as np

model = joblib.load("models/trained_model.pkl")

def predict_risk(population, rainfall, complaints):
    input_data = np.array([[population, rainfall, complaints]])
    
    probability = model.predict_proba(input_data)[0][1]
    risk_score = round(probability * 100, 2)

    if risk_score > 70:
        level = "High Risk"
    elif risk_score > 40:
        level = "Medium Risk"
    else:
        level = "Low Risk"

    return {
        "risk_score": risk_score,
        "risk_level": level
    }

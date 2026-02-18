import joblib
import numpy as np

model = joblib.load("models/trained_model.pkl")


def predict_risk(population, rainfall, complaints):
    input_data = np.array([[population, rainfall, complaints]])
    prediction = model.predict(input_data)[0]

    if prediction == 1:
        return "High Risk"
    else:
        return "Low Risk"

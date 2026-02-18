# AI Urban Cleanliness Risk & Waste Prediction System

## Overview
This project is an AI-driven predictive sanitation system designed for smart cities. 
It forecasts garbage overflow risk using machine learning and assigns a Cleanliness Risk Score to urban zones.

The system enables preventive waste management instead of reactive collection.

---

## Key Features

- Garbage overflow prediction using XGBoost
- Cleanliness Risk Score (0–100)
- Risk categorization (Low / Medium / High)
- FastAPI-based REST backend
- Modular ML architecture
- AMD-optimized AI computation
- Structured backend project design

---

## System Architecture

![Architecture Diagram](demo/architecture.png)

---

## Tech Stack

- Python
- FastAPI
- XGBoost
- Scikit-learn
- Pandas & NumPy
- Joblib
- Uvicorn

---

## How It Works

1. Collects urban sanitation indicators (population, rainfall, complaints).
2. Applies feature engineering.
3. Uses XGBoost to calculate risk probability.
4. Converts probability into risk score (0–100).
5. Categorizes into Low, Medium, or High risk.

---

## Running the Project

### Install dependencies
pip install -r requirements.txt

### Train model
python backend/model_training.py

### Start API
python -m uvicorn backend.app:app

---

## Future Enhancements

- Real-time IoT bin integration
- Heatmap visualization dashboard
- Time-series forecasting
- Cloud deployment
- Multi-city scaling

---

## AMD Optimization

Model training and inference are optimized for AMD Ryzen processors and Radeon GPU acceleration to support efficient AI computation.

---


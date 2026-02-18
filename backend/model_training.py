import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
data = pd.read_csv("../data/sample_dataset.csv")

data["Rainfall_Population_Impact"] = data["Rainfall"] * data["Population"]

# Select features and target
X = data[["Population", "Rainfall", "Complaints", "Rainfall_Population_Impact"]]
y = data["Past_Overflow"]

# Train model
from xgboost import XGBClassifier

model = XGBClassifier(use_label_encoder=False, eval_metric="logloss")
model.fit(X, y)


# Save model
joblib.dump(model, "../models/trained_model.pkl")

print("Model trained and saved successfully!")

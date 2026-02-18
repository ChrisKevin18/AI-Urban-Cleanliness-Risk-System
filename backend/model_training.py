import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
data = pd.read_csv("../data/sample_dataset.csv")

# Select features and target
X = data[["Population", "Rainfall", "Complaints"]]
y = data["Past_Overflow"]

# Train model
model = RandomForestClassifier()
model.fit(X, y)

# Save model
joblib.dump(model, "../models/trained_model.pkl")

print("Model trained and saved successfully!")

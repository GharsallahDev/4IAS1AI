import random
from typing import Dict, Any, List

DIAGNOSIS_TYPES = {
    "viral_infection": {
        "title": "Viral Infection",
        "description": "Signs of viral respiratory infection detected",
        "color": "yellow",
        "severity": "moderate"
    },
    "lower_infection": {
        "title": "Lower Respiratory Infection",
        "description": "Infection in the lower respiratory tract identified",
        "color": "red",
        "severity": "severe"
    },
    "healthy_cough": {
        "title": "Healthy Cough",
        "description": "Normal respiratory function detected",
        "color": "green",
        "severity": "mild"
    },
    "upper_infection": {
        "title": "Upper Respiratory Infection",
        "description": "Infection in the upper respiratory tract detected",
        "color": "orange",
        "severity": "moderate"
    },
    "obstructive_disease": {
        "title": "Obstructive Disease",
        "description": "Signs of airway obstruction identified",
        "color": "purple",
        "severity": "severe"
    }
}

AFFECTED_AREAS_MAP = {
    'viral_infection': ['upper_right', 'upper_left'],
    'lower_infection': ['lower_right', 'lower_left'],
    'healthy_cough': [],
    'upper_infection': ['upper_right', 'upper_left'],
    'obstructive_disease': ['central', 'lower_right', 'lower_left']
}

RECOMMENDATIONS = {
    "viral_infection": [
        {
            "ingredient": "Honey",
            "amount": "2 tablespoons"
        },
        {
            "ingredient": "Ginger",
            "amount": "1 teaspoon"
        },
        {
            "ingredient": "Lemon",
            "amount": "1/2 piece"
        }
    ],
    "lower_infection": [
        {
            "ingredient": "Thyme",
            "amount": "1 cup"
        },
        {
            "ingredient": "Honey",
            "amount": "1 tablespoon"
        },
        {
            "ingredient": "Eucalyptus",
            "amount": "2-3 drops"
        }
    ],
    "upper_infection": [
        {
            "ingredient": "Garlic",
            "amount": "2 cloves"
        },
        {
            "ingredient": "Turmeric",
            "amount": "1 teaspoon"
        },
        {
            "ingredient": "Apple Cider",
            "amount": "1 tablespoon"
        }
    ],
    "obstructive_disease": [
        {
            "ingredient": "Peppermint",
            "amount": "1 cup"
        },
        {
            "ingredient": "Honey",
            "amount": "2 tablespoons"
        },
        {
            "ingredient": "Ginger",
            "amount": "1 inch piece"
        }
    ]
}

class PneumologyService:
    def analyze_symptoms(self, patient_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Analyze patient symptoms and return diagnosis.
        In a real implementation, this would use ML models or other analysis methods.
        """
        possible_diagnoses = list(DIAGNOSIS_TYPES.keys())
        diagnosis_type = random.choice(possible_diagnoses)
        
        return {
            'type': diagnosis_type,
            'confidence': random.randint(75, 95),
            'details': DIAGNOSIS_TYPES[diagnosis_type],
            'affectedAreas': AFFECTED_AREAS_MAP[diagnosis_type]
        }
    
    def get_recommendations(self, diagnosis_type: str) -> Dict[str, Any]:
        """Get recommendations for a specific diagnosis type"""
        if diagnosis_type == "healthy_cough":
            return {
                "message": "No remedies needed. Keep up the good work!",
                "status": "healthy",
                "remedies": []
            }
        
        remedies = RECOMMENDATIONS.get(diagnosis_type, [])
        if len(remedies) > 3:
            remedies = random.sample(remedies, 3)
            
        return {
            "message": "Mix ingredients in warm water. Take twice daily for best results.",
            "status": "needs_treatment",
            "remedies": remedies
        }
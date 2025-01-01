from flask import Blueprint, jsonify, request
from app.services.pneumology_service import PneumologyService

pneumology_bp = Blueprint('pneumology', __name__)
pneumology_service = PneumologyService()

@pneumology_bp.route('/diagnose', methods=['POST'])
def diagnose():
    """Process diagnostic data and return results"""
    data = request.json
    
    patient_data = {
        'age': data.get('age'),
        'hasFever': data.get('hasFever'),
        'hasMusclePain': data.get('hasMusclePain'),
        'hasRespiratoryConditions': data.get('hasRespiratoryConditions'),
        'recordingDuration': data.get('recordingDuration')
    }
    
    diagnosis_result = pneumology_service.analyze_symptoms(patient_data)
    
    return jsonify(diagnosis_result)


@pneumology_bp.route('/recommendations/<diagnosis_type>', methods=['GET'])
def get_recommendations(diagnosis_type):
    """Get recommendations for a specific diagnosis"""
    try:
        recommendations = pneumology_service.get_recommendations(diagnosis_type)
        return jsonify(recommendations)
    except Exception as e:
        return jsonify({
            "error": "Failed to get recommendations",
            "message": str(e)
        }), 500
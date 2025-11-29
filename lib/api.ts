export interface CarInput {
  make: string;
  model: string;
  year: number;
  reported_km: number;
  fuelType: string;
  gearbox: string;
  horsepower: number;
  price: number;
  offerType: string;
}

export interface FraudCheckResponse {
  fraud_score: number;
  is_suspicious: boolean;
  expected_km: number;
  reasons: string[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function checkCarFraud(carData: CarInput): Promise<FraudCheckResponse> {
  const response = await fetch(`${API_URL}/api/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carData),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export async function checkAPIHealth() {
  const response = await fetch(`${API_URL}/health`);
  return response.json();
}

const ejercicios = [
	{
		musculo: 'Pectorales',
		nombre: "Press de banca",
		tipo: "Barra",
		nivel: "Principiante",
	},
	{
		musculo: 'Pectorales',
		nombre: "Press de banca",
		tipo: "Mancuernas",
		nivel: "Intermedio"
	},
	{
		musculo: 'Pectorales',
		nombre: "Push Ups",
		tipo: "Libre",
		nivel: "Principiante"
	},
	{
		musculo: 'Pectorales',
		nombre: "Fondos Verticales",
		tipo: "Libre",
		nivel: "Intermedio"
	},
	{
		musculo: 'Pectorales',
		nombre: "Press Inclinado",
		tipo: "Barra",
		nivel: "Principiante"
	},
	{
		musculo: 'Pectorales',
		nombre: "Press Inclinado Unilateral",
		tipo: "Mancuernas",
		nivel: "Avanzado"
	},
	{
		musculo: 'Pectorales',
		nombre: "Aperturas",
		tipo: "Mancuernas",
		nivel: "Intermedio"
	},
	{
		musculo: 'Pectorales',
		nombre: "Cruces Bilatel",
		tipo: "Maquina",
		nivel: "Avanzado"
	},
	{
		musculo: 'Espalda',
		nombre: "Dominadas",
		tipo: "Libre",
		nivel: "Intermedio"
	},
	{
		musculo: 'Espalda',
		nombre: "Remo agarre Neutro",
		tipo: "Barra",
		nivel: "Intermedio"
	},
	{
		musculo: 'Espalda',
		nombre: "Remo Unilateral",
		tipo: "Mancuernas",
		nivel: "Principiante"
	},
	{
		musculo: 'Espalda',
		nombre: "Remo Cerrado",
		tipo: "Maquina",
		nivel: "Principiante"
	},
	{
		musculo: 'Espalda',
		nombre: "Pull Over",
		tipo: "Maquina",
		nivel: "Intermedio"
	},
	{
		musculo: 'Espalda',
		nombre: "Peso Muerto",
		tipo: "Barra",
		nivel: "Avanzado"
	},
	{
		musculo: 'Espalda',
		nombre: "Trapecios",
		tipo: "Barra",
		nivel: "Principiante"
	},
	{
		musculo: 'Espalda',
		nombre: "Jalón al Menton",
		tipo: "Barra",
		nivel: "Intermedio"
	},
	{
		musculo: 'Biceps',
		nombre: "Curl de Biceps",
		tipo: "Barra",
		nivel: "Principiante"
	},
	{
		musculo: 'Biceps',
		nombre: "Curl de Braquial",
		tipo: "Mancuernas",
		nivel: "Intermedio"
	},
	{
		musculo: 'Biceps',
		nombre: "Curl en Predicador",
		tipo: "Barra",
		nivel: "Intermedio"
	},
	{
		musculo: 'Biceps',
		nombre: "Curl Martillo",
		tipo: "Mancuernas",
		nivel: "Intermedio"
	},
	{
		musculo: 'Biceps',
		nombre: "Curl del Mesero",
		tipo: "Mancuernas",
		nivel: "Avanzado"
	},
	{
		musculo: 'Biceps',
		nombre: "Curl Concentrado",
		tipo: "Mancuernas",
		nivel: "Principiante"
	},
	{
		musculo: 'Biceps',
		nombre: "Curl 21",
		tipo: "Barra",
		nivel: "Avanzado"
	},
	
	{
		musculo: 'Triceps',
		nombre: "Push Downs",
		tipo: "Maquina",
		nivel: "Principiante"
	},
	{
		musculo: 'Triceps',
		nombre: "Curl Frances",
		tipo: "Mancuernas",
		nivel: "Intermedio"
	},
	{
		musculo: 'Triceps',
		nombre: "Patadas Traseras",
		tipo: "Maquina",
		nivel: "Intermedio"
	},
	{
		musculo: 'Triceps',
		nombre: "Extensiones Eleveadas",
		tipo: "Maquina",
		nivel: "Intermedio"
	},
	{
		musculo: 'Triceps',
		nombre: "Press de Banca cerrado",
		tipo: "Barra",
		nivel: "Intermedio"
	},
	{
		musculo: 'Triceps',
		nombre: "Dips elevados",
		tipo: "Libre",
		nivel: "Avanzado"
	},
	{
		musculo: 'Triceps',
		nombre: "Bombeo por arriba de Cabeza",
		tipo: "Mancuernas",
		nivel: "Avanzado"
	},
	{
		musculo: 'Antebrazos',
		nombre: "Curl de muñecas",
		tipo: "Mancuernas",
		nivel: "Principiante"
	},
	{
		musculo: 'Antebrazos',
		nombre: "Curl de muñecas",
		tipo: "Barra",
		nivel: "Intermedio"
	},
	{
		musculo: 'Antebrazos',
		nombre: "Curl de muñecas posteriores",
		tipo: "Barra",
		nivel: "Intermedio"
	},
	{
		musculo: 'Antebrazos',
		nombre: "Curl Martillo",
		tipo: "Maquina",
		nivel: "Intermedio"
	},
	{
		musculo: 'Hombros',
		nombre: "Press Militar",
		tipo: "Barra",
		nivel: "Intermedio"
	},
	{
		musculo: 'Hombros',
		nombre: "Press",
		tipo: "Mancuernas",
		nivel: "Principiante"
	},
	{
		musculo: 'Hombros',
		nombre: "Vuelos Laterales",
		tipo: "Mancuernas",
		nivel: "Principiante"
	},
	{
		musculo: 'Hombros',
		nombre: "Vuelos Posteriores",
		tipo: "Mancuernas",
		nivel: "Principiante"
	},	
	{
		musculo: 'Hombros',
		nombre: "Vuelos con Cables",
		tipo: "Maquina",
		nivel: "Intermedio"
	},
	{
		musculo: 'Hombros',
		nombre: "Vuelos Frontales",
		tipo: "Mancuernas",
		nivel: "Intermedio"
	},
	{
		musculo: 'Hombros',
		nombre: "Press de Pie",
		tipo: "Barra",
		nivel: "Avanzado"
	},
	{
		musculo: 'Piernas',
		nombre: "Sentadillas Libres",
		tipo: "Barra",
		nivel: "Intermedio"
	},
	{
		musculo: 'Piernas',
		nombre: "Sentadillas en Smith",
		tipo: "Maquina",
		nivel: "Principiante"
	},
	{
		musculo: 'Piernas',
		nombre: "Extension de cuadriceps",
		tipo: "Maquina",
		nivel: "Principiante"
	},
	{
		musculo: 'Piernas',
		nombre: "Extension de Gemelos",
		tipo: "Mancuernas",
		nivel: "Principiante"
	},
	{
		musculo: 'Piernas',
		nombre: "Peso Muerto Rumano",
		tipo: "Barra",
		nivel: "Avanzado"
	},
	{
		musculo: 'Piernas',
		nombre: "Camilla de Isquios",
		tipo: "Maquina",
		nivel: "Principiante"
	},
	{
		musculo: 'Piernas',
		nombre: "HipTrust",
		tipo: "Barra",
		nivel: "Intermedio"
	},
	{
		musculo: 'Piernas',
		nombre: "Sentadillas Bulgaras",
		tipo: "Mancuernas",
		nivel: "Avanzado"
	},
	{
		musculo: 'Piernas',
		nombre: "Prensa 45°",
		tipo: "Maquina",
		nivel: "Principiante"
	},
	{
		musculo: 'Piernas',
		nombre: "Sentadilla Hack",
		tipo: "Maquina",
		nivel: "Avanzado"
	},
	{
		musculo: 'Abdomen',
		nombre: "Crunch",
		tipo: "Libre",
		nivel: "Principiante"
	},
	{
		musculo: 'Abdomen',
		nombre: "Laterales",
		tipo: "Libre",
		nivel: "Principiante"
	},
	{
		musculo: 'Abdomen',
		nombre: "Elevacion mano a pie",
		tipo: "Libre",
		nivel: "Principiante"
	},
	{
		musculo: 'Abdomen',
		nombre: "Tijeras",
		tipo: "Libre",
		nivel: "Principiante"
	},
	{
		musculo: 'Abdomen',
		nombre: "Puente",
		tipo: "Libre",
		nivel: "Principiante"
	},
	{
		musculo: 'Abdomen',
		nombre: "Elevacion de piernas",
		tipo: "Libre",
		nivel: "Principiante"
	},
	
	
];

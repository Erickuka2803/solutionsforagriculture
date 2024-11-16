import { Translations } from './types';

export const translations: Translations = {
  en: {
    // Login & Auth
    welcome: "Welcome to Agricultural Loan Assessment System",
    empowering: "Empowering farmers with financial solutions",
    login: "Login",
    register: "Register",
    fullName: "Full Name",
    username: "Username",
    password: "Password",
    role: "Role",
    user: "User",
    manager: "Manager",
    admin: "Admin",
    invalidCredentials: "Invalid credentials",
    usernameExists: "Username already exists",
    
    // Navigation & Common
    home: "Home",
    logout: "Logout",
    back: "Back",
    next: "Next",
    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    print: "Print",
    submit: "Submit",
    review: "Review",
    required: "Required",
    optional: "Optional",
    
    // Choice Screen
    welcomeUser: "Welcome, {name}",
    newApplication: "New Application",
    startNew: "Start a new loan application process",
    printForm: "Print Empty Form",
    downloadBlank: "Download a blank application form",
    viewHistory: "View History",
    reviewApplications: "Review Applications",
    accessPrevious: "Access previous applications",
    manageUsers: "Manage Users",
    adminSystem: "Administer system users",

    // Application Form Steps
    applicationStep: "Step {current} of {total}",
    personalInfo: "Personal Information",
    companyInfo: "Company Information",
    farmDetails: "Farm Details",
    financialInfo: "Financial Information",
    loanDetails: "Loan Details",
    reviewApplication: "Review Application",
    confirmCancel: "Are you sure you want to cancel? All entered data will be lost.",
    backToEdit: "Back to Edit",
    submitApplication: "Submit Application",

    // Personal Information Fields
    applicationId: "Application ID",
    accountNumber: "Account Number",
    email: "Email Address",
    phone: "Phone Number",
    address: "Address",
    age: "Age",
    nationalId: "National ID",
    dateCreated: "Date Created",
    dateRequested: "Date Requested",

    // Company Information Fields
    companyName: "Company Name",
    rccm: "RCCM Number",
    idNat: "ID NAT",
    nImpot: "N° Impôt",
    companyCreationDate: "Creation Date",
    companyAccountNumber: "Company Account Number",

    // Farm Details Fields
    farmSize: "Farm Size (ha)",
    farmAddress: "Farm Address",
    farmLocation: "Farm Location",
    irrigationSystem: "Irrigation System",
    farmingExperience: "Years of Experience",
    seasonalWorkers: "Seasonal Workers",
    coordinates: "Farm Coordinates (Optional)",
    certifications: "Certifications (Optional)",
    modern: "Modern (Drip/Sprinkler)",
    traditional: "Traditional",
    none: "None",
    getCurrentLocation: "Get Current Location",
    enterFarmAddress: "Enter detailed farm location/address",

    // Financial Information Fields
    annualRevenue: "Annual Revenue ($)",
    existingLoans: "Existing Loans ($)",
    monthlyExpenses: "Monthly Expenses ($)",
    collateralValue: "Collateral Value ($)",
    creditScore: "Credit Score",

    // Loan Details Fields
    loanAmount: "Loan Amount ($)",
    loanPurpose: "Loan Purpose",
    loanTerm: "Loan Term",
    repaymentSource: "Repayment Source",
    sustainabilityPractices: "Sustainability Practices",
    purposeOptions: {
      equipment: "Equipment Purchase",
      infrastructure: "Infrastructure Development",
      expansion: "Farm Expansion",
      workingCapital: "Working Capital",
      refinancing: "Refinancing"
    },

    // Assessment & Decision
    assessmentResults: "Assessment Results",
    totalScore: "Total Score",
    institutionDecision: "Institution Decision",
    finalDecision: "Final Decision",
    suggestedRange: "Suggested Amount Range",
    allocatedAmount: "Allocated Amount",
    conditions: "Conditions",
    additionalNotes: "Additional Notes",
    pendingApproval: "Waiting for management approval",
    makeDecision: "Make Decision",
    selectDecision: "Select decision",
    approved: "APPROVED",
    conditional: "CONDITIONAL",
    rejected: "REJECTED",
    basedOnAssessment: "Based on assessment score and financial analysis",
    enterAllocatedAmount: "Enter the final amount to be allocated within the suggested range",

    // PDF Report
    confidential: "Agricultural Loan Assessment System | Confidential",
    loanOfficer: "Loan Officer",
    branchManager: "Branch Manager",
    nameAndSignature: "Name and Signature",
    date: "Date",
    applicationDate: "Application Date",
    forOfficialUse: "For Official Use Only",
    applicantSignature: "Applicant Signature",
  },
  fr: {
    // Login & Auth
    welcome: "Bienvenue au Système d'Évaluation des Prêts Agricoles",
    empowering: "Accompagner les agriculteurs avec des solutions financières",
    login: "Connexion",
    register: "S'inscrire",
    fullName: "Nom Complet",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    role: "Rôle",
    user: "Utilisateur",
    manager: "Gestionnaire",
    admin: "Administrateur",
    invalidCredentials: "Identifiants invalides",
    usernameExists: "Nom d'utilisateur déjà existant",
    
    // Navigation & Common
    home: "Accueil",
    logout: "Déconnexion",
    back: "Retour",
    next: "Suivant",
    save: "Enregistrer",
    cancel: "Annuler",
    edit: "Modifier",
    delete: "Supprimer",
    print: "Imprimer",
    submit: "Soumettre",
    review: "Réviser",
    required: "Obligatoire",
    optional: "Optionnel",
    
    // Choice Screen
    welcomeUser: "Bienvenue, {name}",
    newApplication: "Nouvelle Demande",
    startNew: "Démarrer une nouvelle demande de prêt",
    printForm: "Imprimer Formulaire Vide",
    downloadBlank: "Télécharger un formulaire vierge",
    viewHistory: "Historique",
    reviewApplications: "Examiner les Demandes",
    accessPrevious: "Accéder aux demandes précédentes",
    manageUsers: "Gérer les Utilisateurs",
    adminSystem: "Administrer les utilisateurs du système",

    // Application Form Steps
    applicationStep: "Étape {current} sur {total}",
    personalInfo: "Informations Personnelles",
    companyInfo: "Informations de l'Entreprise",
    farmDetails: "Détails de l'Exploitation",
    financialInfo: "Informations Financières",
    loanDetails: "Détails du Prêt",
    reviewApplication: "Réviser la Demande",
    confirmCancel: "Êtes-vous sûr de vouloir annuler ? Toutes les données saisies seront perdues.",
    backToEdit: "Retour à la Modification",
    submitApplication: "Soumettre la Demande",

    // Personal Information Fields
    applicationId: "ID de la Demande",
    accountNumber: "Numéro de Compte",
    email: "Adresse Email",
    phone: "Numéro de Téléphone",
    address: "Adresse",
    age: "Âge",
    nationalId: "Numéro National d'Identité",
    dateCreated: "Date de Création",
    dateRequested: "Date de Demande",

    // Company Information Fields
    companyName: "Nom de l'Entreprise",
    rccm: "Numéro RCCM",
    idNat: "ID NAT",
    nImpot: "N° Impôt",
    companyCreationDate: "Date de Création",
    companyAccountNumber: "Numéro de Compte de l'Entreprise",

    // Farm Details Fields
    farmSize: "Taille de l'Exploitation (ha)",
    farmAddress: "Adresse de l'Exploitation",
    farmLocation: "Localisation de l'Exploitation",
    irrigationSystem: "Système d'Irrigation",
    farmingExperience: "Années d'Expérience",
    seasonalWorkers: "Travailleurs Saisonniers",
    coordinates: "Coordonnées (Optionnel)",
    certifications: "Certifications (Optionnel)",
    modern: "Moderne (Goutte-à-goutte/Aspersion)",
    traditional: "Traditionnel",
    none: "Aucun",
    getCurrentLocation: "Obtenir la Position Actuelle",
    enterFarmAddress: "Entrez l'adresse détaillée de l'exploitation",

    // Financial Information Fields
    annualRevenue: "Revenu Annuel ($)",
    existingLoans: "Prêts Existants ($)",
    monthlyExpenses: "Dépenses Mensuelles ($)",
    collateralValue: "Valeur des Garanties ($)",
    creditScore: "Score de Crédit",

    // Loan Details Fields
    loanAmount: "Montant du Prêt ($)",
    loanPurpose: "Objectif du Prêt",
    loanTerm: "Durée du Prêt",
    repaymentSource: "Source de Remboursement",
    sustainabilityPractices: "Pratiques Durables",
    purposeOptions: {
      equipment: "Achat d'Équipement",
      infrastructure: "Développement d'Infrastructure",
      expansion: "Expansion de l'Exploitation",
      workingCapital: "Fonds de Roulement",
      refinancing: "Refinancement"
    },

    // Assessment & Decision
    assessmentResults: "Résultats de l'Évaluation",
    totalScore: "Score Total",
    institutionDecision: "Décision de l'Institution",
    finalDecision: "Décision Finale",
    suggestedRange: "Plage de Montant Suggérée",
    allocatedAmount: "Montant Alloué",
    conditions: "Conditions",
    additionalNotes: "Notes Supplémentaires",
    pendingApproval: "En attente d'approbation",
    makeDecision: "Prendre une Décision",
    selectDecision: "Sélectionner la décision",
    approved: "APPROUVÉ",
    conditional: "CONDITIONNEL",
    rejected: "REJETÉ",
    basedOnAssessment: "Basé sur le score d'évaluation et l'analyse financière",
    enterAllocatedAmount: "Entrez le montant final à allouer dans la plage suggérée",

    // PDF Report
    confidential: "Système d'Évaluation des Prêts Agricoles | Confidentiel",
    loanOfficer: "Agent de Crédit",
    branchManager: "Directeur d'Agence",
    nameAndSignature: "Nom et Signature",
    date: "Date",
    applicationDate: "Date de la Demande",
    forOfficialUse: "Pour Usage Officiel Uniquement",
    applicantSignature: "Signature du Demandeur",
  }
};
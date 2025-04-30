export enum RegisterPaymentStep {
	Select = 0,
	Regist = 1,
	Registed = 2,
}
export type RegisterPaymentUIContextType = {
	step: RegisterPaymentStep;
	changeRegistStep: () => void;
	changeRegistedStep: () => void;
	headingText: string;
};

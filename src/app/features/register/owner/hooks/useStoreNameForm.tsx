import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValid } from "zod";
import {
	type registerStoreNmaeType,
	registerStoreNmaeValidate,
} from "../validate/RegisterOwnerFormValidation";

const useStoreNameForm = () => {
	const {
		register,
		formState: { errors },
		watch,
	} = useForm<registerStoreNmaeType>({
		resolver: zodResolver(registerStoreNmaeValidate),
		mode: "onChange",
	});
	const storeName = watch("name") ?? "";
	const isDisabled = !isValid || storeName === "";

	return { register, errors, isDisabled, storeName };
};

export default useStoreNameForm;

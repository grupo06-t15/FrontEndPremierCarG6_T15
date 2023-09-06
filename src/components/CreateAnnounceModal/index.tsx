import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import { carsApi } from "../../services/api";
import {
	AddImageBtn,
	CloseModalBtn,
	DeleteAnnounceBtn,
	ModalContainer,
	ModalDescriptionInput,
	ModalForm,
	ModalFormImputContainer,
	ModalFormInputTitle,
	ModalFormSelect,
	ModalFormSubclass,
	ModalFormSubclassInput,
	ModalFormSubclassTitle,
	ModalFormTitle,
	ModalHeader,
	ModalTitle,
	SaveAnnounceBtn,
} from "./styled";

export type TCar = {
	id: string;
	name: string;
	brand: string;
	year: string;
	fuel: number;
	value: number;
};

export const CreateAnnouceModal = () => {
	const [brandList, setBrandList] = useState<string[]>([]);
	const [modelList, setModelList] = useState<TCar[]>([]);
	const [currentCar, setCurrentCar] = useState<TCar>({} as TCar);
	const [imagesCount, setImagesCount] = useState<number>(2);

	const { setModalType } = useContext(ModalContext);

	const [isSaving, setIsSaving] = useState(false);

	const saveChanges = async () => {
		setIsSaving(true);

		const editedData = {
			brand: document.getElementById("brand").value,
			model: document.getElementById("model").value,
			year: Number(document.getElementById("year").value),
			fuel: document.getElementById("fuel").value,
			mileage: Number(document.getElementById("mileage").value),
			color: document.getElementById("color").value,
			price: Number(document.getElementById("price").value),
			fipePrice: Number(document.getElementById('fipePrice').value),
			description: document.getElementById("description").value,
			images: [ 
				{
					name: "cover image",
					url: document.getElementById('imagem_da_capa').value
				},
				{
					name: "cover image",
					url: document.getElementById('imagem_da_capa').value
				},
				{
					name: "cover image",
					url: document.getElementById('imagem_da_capa').value
				},
			 ],
		};

		const token = localStorage.getItem("@TOKEN");

		try {
			const response = await fetch('http://localhost:3000/announcements', {
				method: "POST",
				headers: new Headers({
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				}),
				body: JSON.stringify(editedData),
			});

			if (response.ok) {
				alert("As alterações foram salvas com sucesso.");
			} else {
				alert("Falha ao salvar as alterações. Tente novamente mais tarde.");
			}
		} catch (error) {
			console.error("Erro ao salvar as alterações:", error);
			alert(
				"Ocorreu um erro ao salvar as alterações. Tente novamente mais tarde."
			);
		} finally {
			setIsSaving(false);
			setModalType('')
		}
	};

	const firstLetterUppercase = (str: string) => {
		return str[0].toUpperCase() + str.slice(1);
	};

	const getBrands = async () => {
		await carsApi
			.get("/cars")
			.then((response) => {
				setBrandList(Object.keys(response.data));
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const getModels = async (brand: string) => {
		await carsApi
			.get(`/cars?brand=${brand}`)
			.then((response) => {
				setModelList(response.data);
				setCurrentCar(response.data[0]);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const renderImages = () => {
		const result = [];
		for (let i = 1; i <= imagesCount; i++) {
			result.push(
				<ModalFormImputContainer key={i + "_imagem_da_galeria"}>
					<ModalFormInputTitle htmlFor={`${i}_iamgem_da_galeria`}>
						{i}° Imagem da galeria
					</ModalFormInputTitle>
					<ModalFormSubclassInput
						id={`${i}_iamgem_da_galeria`}
						type="text"
						placeholder="https://image.com"
					/>
				</ModalFormImputContainer>
			);
		}

		return result.map((el) => el);
	};

	useEffect(() => {
		getBrands();
		getModels("chevrolet");
	}, []);

	return (
		<ModalContainer>
			<ModalHeader>
				<ModalTitle>Criar anúncio</ModalTitle>
				<CloseModalBtn onClick={(e) => setModalType("")}>X</CloseModalBtn>
			</ModalHeader>
			<ModalForm>
				<ModalFormTitle htmlFor="title">Infomações do veículo</ModalFormTitle>
				<ModalFormImputContainer>
					<ModalFormInputTitle htmlFor="brand">Marca</ModalFormInputTitle>
					<ModalFormSelect
						name="brand"
						id="brand"
						onChange={(e) => getModels(e.target.value)}
					>
						{brandList.map((brand) => (
							<option key={brand} value={brand}>
								{firstLetterUppercase(brand)}
							</option>
						))}
					</ModalFormSelect>
				</ModalFormImputContainer>
				<ModalFormImputContainer>
					<ModalFormInputTitle htmlFor="model">Modelo</ModalFormInputTitle>
					<ModalFormSelect
						name="model"
						id="model"
						onChange={(e) =>
							setCurrentCar(
								modelList.find((car: TCar) => car.name === e.target.value) ||
									({} as TCar)
							)
						}
					>
						{modelList?.map((car: TCar) => (
							<option key={car.id} value={car.name}>
								{car.name}
							</option>
						))}
					</ModalFormSelect>
				</ModalFormImputContainer>
				<ModalFormImputContainer className="sublcass">
					<ModalFormSubclass>
						<ModalFormSubclassTitle htmlFor="year">Ano</ModalFormSubclassTitle>
						<ModalFormSubclassInput
							id="year"
							type="text"
							defaultValue={currentCar?.year}
						/>
					</ModalFormSubclass>
					<ModalFormSubclass>
						<ModalFormSubclassTitle htmlFor="fuel">
							Combustível
						</ModalFormSubclassTitle>
						<ModalFormSubclassInput
							id="fuel"
							type="text"
							placeholder="Gasolina / Etanol"
						/>
					</ModalFormSubclass>
				</ModalFormImputContainer>
				<ModalFormImputContainer className="sublcass">
					<ModalFormSubclass>
						<ModalFormSubclassTitle htmlFor="mileage">
							Quilometragem
						</ModalFormSubclassTitle>
						<ModalFormSubclassInput
							id="mileage"
							type="text"
							placeholder="ex: 3000"
						/>
					</ModalFormSubclass>
					<ModalFormSubclass>
						<ModalFormSubclassTitle htmlFor="color">Cor</ModalFormSubclassTitle>
						<ModalFormSubclassInput
							id="color"
							type="text"
							placeholder="Ex: Branco"
						/>
					</ModalFormSubclass>
				</ModalFormImputContainer>
				<ModalFormImputContainer className="sublcass">
					<ModalFormSubclass>
						<ModalFormSubclassTitle htmlFor="fipePrice">
							Preço tabela FIPE
						</ModalFormSubclassTitle>
						<ModalFormSubclassInput
							id="fipePrice"
							type="text"
							placeholder="ex: 48.000"
							defaultValue={currentCar?.value}
						/>
					</ModalFormSubclass>
					<ModalFormSubclass>
						<ModalFormSubclassTitle htmlFor="price">
							Preço
						</ModalFormSubclassTitle>
						<ModalFormSubclassInput
							id="price"
							type="text"
							placeholder="Ex: 50.000"
						/>
					</ModalFormSubclass>
				</ModalFormImputContainer>
				<ModalFormImputContainer>
					<ModalFormInputTitle htmlFor="description">
						Descrição
					</ModalFormInputTitle>
					<ModalDescriptionInput
						id="description"
						rows={10}
						placeholder="Descrição do automóvel..."
					/>
				</ModalFormImputContainer>
				<ModalFormImputContainer>
					<ModalFormInputTitle htmlFor="imagem_da_capa">
						Imagem da capa
					</ModalFormInputTitle>
					<ModalFormSubclassInput
						id="imagem_da_capa"
						type="text"
						placeholder="https://image.com"
					/>
				</ModalFormImputContainer>
				{renderImages()}
				<AddImageBtn
					type="button"
					onClick={(e) => setImagesCount(imagesCount + 1)}
				>
					Adicionar campo para imagem da galeria
				</AddImageBtn>
				<ModalFormImputContainer className="sublcass">
					<DeleteAnnounceBtn disabled={isSaving} type="button">
						Excluir anúncio
					</DeleteAnnounceBtn>
					<SaveAnnounceBtn
						disabled={isSaving}
						type="button"
						onClick={saveChanges}
					>
						{isSaving ? "Salvando..." : "Salvar alterações"}
					</SaveAnnounceBtn>
				</ModalFormImputContainer>
			</ModalForm>
		</ModalContainer>
	);
};

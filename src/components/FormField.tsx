  // src/components/FormField.tsx
  import React from "react"

  type InputProps = {
    className?: string
    id?: string
    name?: string
    value?: string
    email?: string
    phone?: string
    numberOfLives?: string
    typeOfPlan?: string
    /** Optional onSubmit handler */
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  }

  const FormField: React.FC<InputProps> = ({
    className = "",
    id = "",
    name = "",
    value = "",
    email = "",
    phone = "",
    numberOfLives = "",
    typeOfPlan = "",
    onSubmit,
  }) => {
    const baseControl =
      "w-full border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-12 px-3"

    return (
      <form className={className} onSubmit={onSubmit}>
        <div className="mb-4 bg-gray-200 p-6 space-y-4 rounded">
          <h2 className="text-2xl font-bold mb-4">Solicite sua Cotação</h2>

          {/* Name */}
          <input
            type="text"
            id={id}
            name={name}
            placeholder="Nome"
            defaultValue={value}
            className={baseControl}
          />

          {/* Email */}
          <input
            type="email"
            id={id ? `${id}-email` : "email"}
            name="email"
            placeholder="Email"
            defaultValue={email}
            className={baseControl}
          />

          {/* Phone */}
          <input
            type="tel"
            id={id ? `${id}-phone` : "phone"}
            name="phone"
            placeholder="Celular"
            defaultValue={phone}
            className={baseControl}
          />

          {/* Number of Lives */}
          <input
            type="text"
            id={id ? `${id}-lives` : "numberOfLives"}
            name="numberOfLives"
            placeholder="Número de vidas"
            defaultValue={numberOfLives}
            className={baseControl}
          />

          {/* Type of Plan */}
          <select
            id={id ? `${id}-plan` : "typeOfPlan"}
            name="typeOfPlan"
            defaultValue={typeOfPlan}
            className={`${baseControl} appearance-none`}
          >
            <option value="" disabled>
              Selecione seu plano
            </option>
            <option value="basic">Efetivo</option>
            <option value="flex">Flex</option>
            <option value="ideal">Ideal</option>
            <option value="nacional">Nacional</option>
            <option value="plus">Nacional Plus</option>
            <option value="premium">Premium</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              cursor-pointer
              w-full
              py-3
              mt-2
              bg-[#cf1c32]
              hover:bg-red-500
              transition duration-200
              hover:scale-[1.01]
              text-white
              font-medium
              rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          >
            Solicitar Cotação
          </button>
        </div>
      </form>
    )
  }

  export default FormField

import { ExerciseShell } from "../../components/ExerciseShell";
import { SubmitEventHandler, useState } from "react"

// GOAL: Build a multi-step form wizard
// ACCEPTANCE CRITERIA:
// - Multiple form steps (personal info, address, review) X
// - Next/Previous navigation X
// - Per-step validation X
// - Review step shows all entered data X
// - Submit button on final step X
// - Progress indicator showing current step

type Step = "personal" | "address" | "review";
type Status = "typing" | "complete";
interface Profile {
  userName: string,
  address: string,
}

export default function FormWizard() {
  const [profile, setProfile] = useState<Profile>({
    userName: "",
    address: ""
  })
  const [step, setStep] = useState<Step>("personal");
  const [status, setStatus] = useState<Status>("typing");

  const isButtonDisabled = step === "personal" ? !profile.userName.trim() : !profile.address.trim();

  function handleUpdateProfile(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }))
  }

  const stepState: Record<Step, { next: Step | null; prev: Step | null }> = {
    personal: {
      next: "address",
      prev: null,
    },
    address: {
      next: "review",
      prev: "personal",
    },
    review: {
      next: null,
      prev: "address",
    },
  }

  const stepComponents: Record<Step, () => React.ReactNode> = {
    personal: () => <Form
      name="userName"
      label="Name"
      value={profile.userName}
      handleSubmit={handleNext}
      onChange={handleUpdateProfile}
    />,
    address: () => <Form
      name="address"
      label="Address"
      value={profile.address}
      handleSubmit={handleNext}
      onChange={handleUpdateProfile}
    />,
    review: () => <Review
      profile={profile}
      setStatus={setStatus}
    />,
  }

  function handlePrev() {
    if (stepState[step].prev) setStep(stepState[step].prev)
  }

  function handleNext(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if (stepState[step].next) setStep(stepState[step].next)
  }

  function handleResetForm() {
    setStatus("typing")
    setStep("personal")
    setProfile({ userName: "", address: "" })
  }

  return (
    <ExerciseShell
      title="Form Wizard"
      description="Multi-step form with validation and navigation."
    >
      <div>
        {status === "complete" ?
          <>
            <h1>Form Submitted</h1>
            <button onClick={handleResetForm}>Reset</button>
          </>
          : <>
            <h1>{step.charAt(0).toUpperCase() + step.slice(1)}</h1>
            {stepComponents[step]()}
            <div>
              <button onClick={handlePrev}>Prev</button>
              <button disabled={isButtonDisabled} onClick={handleNext}>Next</button>
            </div>
          </>
        }
      </div>
    </ExerciseShell>
  );
}

interface FormProps {
  label: string,
  name: string,
  value: string,
  handleSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Form({ label, name, value, handleSubmit, onChange }: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      {label}:
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      <br />
    </form>
  )
}

interface ReviewProps {
  profile: Profile,
  setStatus: React.Dispatch<React.SetStateAction<Status>>
}

function Review({ profile, setStatus }: ReviewProps) {
  return (
    <form>
      Name: {profile.userName}
      {<br />}
      Address: {profile.address}
      {<br />}
      <button type="submit" onClick={() => setStatus("complete")}>
        Submit
      </button>
    </form>
  )
}

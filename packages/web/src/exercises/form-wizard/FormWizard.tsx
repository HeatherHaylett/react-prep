import { ExerciseShell } from "../../components/ExerciseShell";
import { useEffect, useRef, useState } from "react"

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

  function handleUpdateProfile(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }))
  }

  function handlePrev() {
    if (stepState[step].prev) setStep(stepState[step].prev)
  }

  function handleNext(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (stepState[step].next) setStep(stepState[step].next)
  }

  function handleResetForm() {
    setStatus("typing")
    setStep("personal")
    setProfile({ userName: "", address: "" })
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
      key="personal"
      name="userName"
      label="Name"
      value={profile.userName}
      onSubmit={handleNext}
      onChange={handleUpdateProfile}
    />,
    address: () => <Form
      key="address"
      name="address"
      label="Address"
      value={profile.address}
      onSubmit={handleNext}
      onChange={handleUpdateProfile}
    />,
    review: () => <Review
      profile={profile}
      setStatus={setStatus}
    />,
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
              {step === "personal" ? null : <button type="button" onClick={handlePrev}>Prev</button>}
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
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Form({ label, name, value, onSubmit, onChange }: FormProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, []);

  return (
    <form onSubmit={onSubmit}>
      {label}:
      <input
        ref={inputRef}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      <br />
      <button type="submit" disabled={!value.length}>Next</button>
    </form>
  )
}

interface ReviewProps {
  profile: Profile,
  setStatus: React.Dispatch<React.SetStateAction<Status>>
}

function Review({ profile, setStatus }: ReviewProps) {
  return (
    <section>
      Name: {profile.userName}
      <br />
      Address: {profile.address}
      <br />
      <button onClick={() => setStatus("complete")}>Submit</button>
    </section>
  )
}

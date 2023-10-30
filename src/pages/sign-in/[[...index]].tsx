import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="border-radius pb-43 flex justify-center">
      <SignIn
        appearance={{
          elements: {
            formFieldLabel: {
              fontSize: 18,
            },
            formButtonPrimary: {
              color: "#19191A",
              fontSize: 18,
              textTransform: "none",
              backgroundColor: "#FFD550",
              "&:hover, &:focus, &:active": {
                backgroundColor: "#DAAD06",
              },
              footerActionText: {
                backgroundColor: "#FFD550",
              },
            },
            logoImage: {
              filter: "brightness(1)",
            },
            b3fm6y: {
              backgroundColor: "black",
            },
            footer: "hidden",
            formFieldAction: "hidden",
          },
          variables: {
            colorBackground: "#19191A",
            colorInputBackground: "#1A1E22",
            colorAlphaShade: "white",
            colorText: "white",
            colorInputText: "white",
            colorPrimary: "black",
          },
        }}
      />
    </div>
  );
}

const styles = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

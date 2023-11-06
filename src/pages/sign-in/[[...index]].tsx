import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="flex min-h-screen justify-center">
      <SignIn
        appearance={{
          elements: {
            formFieldLabel: {
              fontSize: 18,
            },
            formFieldInput: {
              color: "black",
            },
            formFieldInputShowPasswordButton: {
              backgroundColor: "#D1D1D1",
            },
            formFieldInputGroup: {},
            identityPreviewEditButton: {
              color: "#D1D1D1",
              "&:hover, &:focus, &:active": {
                backgroundColor: "#D1D1D1",
              },
            },
            card: {
              borderRadius: 0,
            },
            formButtonPrimary: {
              color: "#19191A",
              fontSize: 18,
              textTransform: "none",
              borderRadius: 0,
              backgroundColor: "#FFD550",
              "&:hover, &:focus, &:active": {
                backgroundColor: "#FFF1B8",
              },
              footerActionText: {
                backgroundColor: "#FFD550",
              },
            },
            logoBox: {
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

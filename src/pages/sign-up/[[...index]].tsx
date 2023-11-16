import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen justify-center">
      <SignUp
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
            footerActionLink: {
              color: "#FFD550",
              "&:hover, &:focus, &:active": {
                color: "#FFF1B8",
              },
            },
            formFieldAction: "hidden",
            otpCodeFieldInput: {
              color: "black",
            },
            formResendCodeLink: {
              color: "#FFD550",
              "&:hover, &:focus, &:active": {
                color: "#FFF1B8",
              },
            },
            otpCodeFieldInputs: {
              gap: 5,
            },
            headerBackLink: {
              textDecorationColor: "white",
              color: "#FFD550",
              "&:hover, &:focus, &:active": {
                color: "#FFF1B8",
                textDecorationColor: "#FFF1B8",
              },
            },
            headerBackIcon: "hidden",
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

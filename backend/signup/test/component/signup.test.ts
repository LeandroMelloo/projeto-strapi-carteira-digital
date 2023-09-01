import { expect } from "chai";
import { SignupInitParams } from "@src/types/signup";
import signupInit from "@src/controllers/signup";
import { SinonStub, stub, restore } from "sinon";

let insertSignup = SinonStub;

describe("Signup initialization", () => {
    beforeEach(() => {
        insertSignup = stub(signupRepo, "insert");
    });

    afterEach(() => restore())

    it("return a signup token as response to sigunp initilization", async () => {
        const signupParams: SignupInitParams = {
            email: "email@example.com",
            password: "password"
        };

        const signup = await signupInit(signupParams);

        expect(signup.token).to.be.a("string").that.has.length(36);
    });

    it("return a signup with init params that sent to the function", async () => {
        const signupParams: SignupInitParams = {
            email: "email@example.com",
            password: "password"
        };

        const signup = await signupInit(signupParams);

        expect(signup.initParams).to.be.deep.equal(signupParams);
    });

    it("persit signup in the database", async () => {
        const signupParams: SignupInitParams = {
            email: "email@example.com",
            password: "password"
        };

        const signup = await signupInit(signupParams);

        expect(signup.initParams).to.be.deep.equal(signupParams);
    });
})
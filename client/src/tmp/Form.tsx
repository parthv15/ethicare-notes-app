import { useForm } from "react-hook-form";
import { useState } from "react";
import { ObjectiveAndRequirement } from "./requirement";

const Form = () => {
  const { register, handleSubmit } = useForm<ObjectiveAndRequirement>();

  const [showOption, setShowOption] = useState(false);
  const [showChangeOption, setShowChangeOption] = useState("");

  function showYes() {
    if (!showOption) {
      setShowOption(!showOption);
    }
  }

  function showNo() {
    if (showOption) {
      setShowOption(!showOption);
    }
  }

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setShowChangeOption(selectedValue);
  };

  const bothOptions = (
    <div className="pt-2 pb-2">
      <h4 className="pb-2">Term changes</h4>
      <input
        type="checkbox"
        {...register("bothTermChanges.employmentConditions")}
      />
      <label className="pl-2">Employment conditions</label>
      <br />

      <input type="checkbox" {...register("bothTermChanges.leaveType")} />
      <label className="pl-2">Parental leave / maternity leave</label>
      <br />

      <input type="checkbox" {...register("bothTermChanges.extendedHoliday")} />
      <label className="pl-2">Extended Holidays</label>
      <br />

      <input type="checkbox" {...register("bothTermChanges.majorExpense")} />
      <label className="pl-2">Major</label>
      <br />

      <input type="checkbox" {...register("bothTermChanges.retirementBoth")} />
      <label className="pl-2">
        Retirement (only for both long and short term)
      </label>
      <br />

      <input type="checkbox" />
      <input className="border ml-2" type="text" placeholder="Other" />
      <br />
    </div>
  );

  const longOptions = (
    <div>
      <div className="pt-2 pb-2">
        <h4 className="pb-2">Long - term changes</h4>
        <input
          type="checkbox"
          {...register("longTermChanges.retirementLong")}
        />
        <label className="pl-2">Retirement</label>
        <br />

        <input type="checkbox" />
        <input className="border ml-2" type="text" placeholder="Other" />
        <br />
      </div>

      <div className="pt-2 pb-2">
        <h4 className="pb-2">Exit Strategy discussed: </h4>
        <input
          type="checkbox"
          {...register("longTermChanges.exitStrategy.superannuation")}
          value="Lumpsum payment from super .... "
        />
        <label className="pl-2">Lumpsum payment from super .... </label>
        <br />

        <input
          type="checkbox"
          {...register("longTermChanges.exitStrategy.investmentProperty")}
          value="Sale of investment property .... "
        />
        <label className="pl-2">Sale of investment property .... </label>
        <br />

        <input
          type="checkbox"
          {...register("longTermChanges.exitStrategy.downsizing")}
          value="Downsizing. Sale of owner-occupied .... "
        />
        <label className="pl-2">Downsizing. sale of owner-occupied .... </label>
        <br />

        <input type="checkbox" />
        <input className="border ml-2" type="text" placeholder="Other" />
        <br />
      </div>
    </div>
  );

  async function onSubmit(data: ObjectiveAndRequirement): Promise<void> {
    console.log(JSON.stringify(data));
    const response = await fetch("/api/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response.json());
  }

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">Application Type</h4>
          <select className="border" {...register("applicationType")}>
            <option value="" disabled selected hidden>
              Select Option
            </option>
            <option value="formal-approval">formal approval</option>
            <option value="pre-approval">pre approval</option>
          </select>
        </div>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">Referral</h4>
          <select {...register("referral")} className="border">
            <option value="" disabled selected hidden>
              Select Option
            </option>
            <option value="existing">Existing Client</option>
            <option value="non-exisiting">
              new client referred by existing
            </option>
            <option value="new-client">new client direct contact</option>
          </select>
        </div>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">Loan Category</h4>
          <select {...register("loanCategory")} className="border">
            <option value="" disabled selected hidden>
              Select Option
            </option>
            <option value="purchase">Purchase</option>
            <option value="refinance">Refinance</option>
            <option value="top-up">Top-up</option>
            <option value="purchase + refinance">
              Purchase with refinance
            </option>
          </select>
        </div>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">Proptery Type</h4>
          <select {...register("propertyType")} className="border">
            <option value="" disabled selected hidden>
              Select Option
            </option>
            <option value="established">Established</option>
            <option value="land-only">Land only</option>
            <option value="building-only">Building only</option>
            <option value="land + building">Land and building</option>
            <option value="mixed">Mixed: established and vacant land</option>
            <option value="mixed-building">
              Mixed: established and vacant land and new building
            </option>
          </select>
        </div>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">Purpose</h4>
          <select {...register("applicationPurpose")} className="border">
            <option value="" disabled selected hidden>
              Select Option
            </option>
            <option value="owner-occupied">Owner Occupied</option>
            <option value="investment">Investment</option>
            <option value="both">Both owner</option>
          </select>
        </div>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">Product Session</h4>
          <select {...register("productSelection")} className="border">
            <option value="" disabled selected hidden>
              Select Option
            </option>
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="fixed">Fixed</option>
            <option value="split">Split</option>
          </select>
        </div>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">Repayment Type</h4>
          <select {...register("repaymentType")} className="border">
            <option value="" disabled selected hidden>
              Select Option
            </option>
            <option value="principal + interest">Princip + inte</option>
            <option value="interest">interestonly</option>
            <option value="both">both + interest only</option>
          </select>
        </div>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">Loan term selection</h4>
          <select {...register("loanTerm")} className="border">
            <option value="" disabled selected hidden>
              Select Option
            </option>
            <option value="maximum-available">
              maximum available for stated...
            </option>
            <option value="consistent">keeping same as current...</option>
            <option value="increasing">increasing from current...</option>
            <option value="reducing">reducing from current...</option>
            <option value="lower">borrowers selection lower...</option>
          </select>
        </div>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">Name of Lender</h4>
          <input
            placeholder="enter your answer"
            className="border"
            {...register("lenderName")}
          ></input>
        </div>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">Existing account holder of lender</h4>
          <input
            type="radio"
            {...register("isExistingHolderOfLender")}
            value="yes"
          />{" "}
          Yes <br></br>
          <input
            type="radio"
            {...register("isExistingHolderOfLender")}
            value="no"
          />{" "}
          No {/** TEST HERE */}
        </div>

        <div className="pt-2 pb-2">
          <h4 className="pb-2">Lender Selection based on: </h4>
          <input
            type="checkbox"
            {...register("lenderSelection.existingHolder")}
          />
          <label className="pl-2">Existing account holder</label>
          <br />

          <input type="checkbox" {...register("lenderSelection.rateOffer")} />
          <label className="pl-2">Promotional interest rate offer</label>
          <br />

          <input
            type="checkbox"
            {...register("lenderSelection.discountedRate")}
          />
          <label className="pl-2">Discounted rate under package</label>
          <br />

          <input
            type="checkbox"
            {...register("lenderSelection.upfrontBenefit")}
          />
          <label className="pl-2">Upfront benefit by cash back offer</label>
          <br />

          <input type="checkbox" {...register("lenderSelection.higherLVR")} />
          <label className="pl-2">Higher LVR requirement</label>
          <br />

          <input
            type="checkbox"
            {...register("lenderSelection.crossCollateral")}
          />
          <label className="pl-2">Cross-collateralization</label>
          <br />

          <input
            type="checkbox"
            {...register("lenderSelection.creditPolicy.selfEmployment")}
          />
          <label className="pl-2">Credit policy - self employment</label>
          <br />

          <input
            type="checkbox"
            {...register("lenderSelection.creditPolicy.shortTermEmployment")}
          />
          <label className="pl-2">Credit policy - short-term employment</label>
          <br />

          <input
            type="checkbox"
            {...register("lenderSelection.creditPolicy.casualEmployment")}
          />
          <label className="pl-2">Credit policy - casual employment</label>
          <br />

          <input
            type="checkbox"
            {...register("lenderSelection.creditPolicy.specificLending")}
          />
          <label className="pl-2">
            Credit policy - specific lending criteria
          </label>
          <br />

          <input
            type="checkbox"
            {...register("lenderSelection.creditPolicy.cashOutReq")}
          />
          <label className="pl-2">Credit policy - cash out requirement</label>
          <br />

          <input type="checkbox" {...register("lenderSelection.other")} />
          <input className="border ml-2" type="text" placeholder="Other" />
          <br />
        </div>
        <div className="pt-2 pb-2">
          <h4 className="pb-2">What type of changes?</h4>
          <input
            type="radio"
            onClick={showYes}
            {...register("typeOfChange")}
            value="yes"
          />{" "}
          Yes <br></br>
          <input
            type="radio"
            onClick={showNo}
            {...register("typeOfChange")}
            value="no"
          />{" "}
          No
        </div>
        {showOption && (
          <div className="pt-2 pb-2">
            <h4 className="pb-2">Referral</h4>
            <select
              {...register("changeReferralType")}
              className="border"
              onChange={handleChange}
            >
              <option value="" disabled selected hidden>
                Select Option
              </option>
              <option value="short">short term changes</option>
              <option value="both">both: short and long term changes</option>
              <option value="long">long term changes</option>
            </select>
          </div>
        )}

        {showOption &&
          (showChangeOption === "short" || showChangeOption === "both") &&
          bothOptions}
        {showOption && showChangeOption === "long" && longOptions}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

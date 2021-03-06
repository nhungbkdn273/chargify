export const CHARGIFY_FIELDS = {
      card: {
        firstName: {
          selector: "#first-name",
          label: "First name",
          placeholder: "John",
          required: false,
          message: invalidError,
          maxlength: "30",
        },
        lastName: {
          selector: "#last-name",
          label: "Last name",
          placeholder: "Doe",
          required: false,
          message: invalidError,
          maxlength: "30",
        },
        number: {
          selector: "#card-number",
          label: "Card number",
          placeholder: "xxxx xxxx xxxx xxxx",
          message: invalidError,
        },
        month: {
          selector: "#month",
          label: "Month",
          placeholder: "mm",
          message: invalidError,
        },
        year: {
          selector: "#year",
          label: "Year",
          placeholder: "yyyy",
          message: invalidError,
        },
        cvv: {
          selector: "#cvv",
          label: "CVV",
          placeholder: "123",
          required: false,
          message: invalidError,
        },
        address: {
          selector: "#address",
          label: "Address",
          placeholder: "1234 Hill St",
          required: false,
          message: invalidError,
          maxlength: "70",
        },
        address2: {
          selector: "#address2",
          label: "Address 2",
          placeholder: "1234 Hill St",
          required: false,
          message: invalidError,
          maxlength: "70",
        },
        city: {
          selector: "#city",
          label: "City",
          placeholder: "Austin",
          required: false,
          message: invalidError,
          maxlength: "30",
        },
        state: {
          selector: "#state",
          label: "State",
          placeholder: "TX",
          required: false,
          message: invalidError,
          maxlength: "2",
        },
        zip: {
          selector: "#zip",
          label: "Zip",
          placeholder: "10001",
          required: false,
          message: invalidError,
          maxlength: "5",
        },
        country: {
          selector: "#country",
          label: "Country",
          placeholder: "US",
          required: false,
          message: invalidError,
          maxlength: "30",
        },
      },
      bank: {
        firstName: {
          selector: "#first-name",
          label: first_name_label.length > 0 && first_name_label[0].text,
          placeholder: "John",
          required: false,
          message: invalidError,
          maxlength: "30",
        },
        lastName: {
          selector: "#last-name",
          label: last_name_label.length > 0 && last_name_label[0].text,
          placeholder: "Doe",
          required: false,
          message: invalidError,
          maxlength: "30",
        },
        bankName: {
          selector: "#bank-name",
          label: bank_name_label.length > 0 && bank_name_label[0].text,
          placeholder: "My Bank",
          message: invalidError,
        },
        routingNumber: {
          selector: "#routing-number",
          label: routing_number_label.length > 0 && routing_number_label[0].text,
          placeholder: "123412341234",
          message: invalidError,
        },
        accountNumber: {
          selector: "#account-number",
          label: account_number_label.length > 0 && account_number_label[0].text,
          placeholder: "123412341234",
          message: invalidError,
        },
        accountType: {
          selector: "#account-type",
          label: account_type_label.length > 0 && account_type_label[0].text,
          placeholder: "Select One...",
          required: true,
          message: invalidError,
        },
        accountHolderType: {
          selector: "#account-holder-type",
          label: account_holder_type_label.length > 0 && account_holder_type_label[0].text,
          placeholder: "Select One...",
          required: true,
          message: invalidError,
        },
        address: {
          selector: "#address",
          label: address_label.length > 0 && address_label[0].text,
          placeholder: "1234 Hill St",
          required: false,
          message: invalidError,
          maxlength: "70",
        },
        address2: {
          selector: "#address2",
          label: address2_label.length > 0 && address2_label[0].text,
          placeholder: "1234 Hill St",
          required: false,
          message: invalidError,
          maxlength: "70",
        },
        city: {
          selector: "#city",
          label: city_label.length > 0 && city_label[0].text,
          placeholder: "Austin",
          required: false,
          message: invalidError,
          maxlength: "30",
        },
        state: {
          selector: "#state",
          label: state_label.length > 0 && state_label[0].text,
          placeholder: "TX",
          required: false,
          message: invalidError,
          maxlength: "2",
        },
        zip: {
          selector: "#zip",
          label: zip_label.length > 0 && zip_label[0].text,
          placeholder: "10001",
          required: false,
          message: invalidError,
          maxlength: "5",
        },
        country: {
          selector: "#country",
          label: country_label.length > 0 && country_label[0].text,
          placeholder: "US",
          required: false,
          message: invalidError,
          maxlength: "30",
        },
      },
    }
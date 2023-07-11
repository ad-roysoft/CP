import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
////<..............searchbyphone..............>/////
const prodUrl = "http://43.205.98.225/CGPGW/GPWS";
const devUrl = "http://localhost:9090/GPWS";

//to switch please change here
const baseUrl = devUrl;

export const search = createAsyncThunk("search", async (data) => {
  const url = baseUrl + "/searchVisiting";
  const result = await postData(data, url);
  // data.visiting = result.visiting;

  return result;
});
export const save = createAsyncThunk("save", async (data) => {
  const url = baseUrl + "/saveVisiting";
  const result = await postData(data, url);
  return result;
});
export const saveVisiting = createAsyncThunk("saveVisiting", async (data) => {
  const url = baseUrl + "/saveVisiting";
  const result = await postData(data, url);
  return result;
});

export const callLogin = createAsyncThunk("callLogin", async (data) => {
  const url = baseUrl + "/doLogin";
  const result = await postData(data, url);
  return result;
});

export const downloadReport = createAsyncThunk(
  "downloadReport",
  async (data, login) => {
    const url =
      baseUrl +
      "/downloadVisitingReport?fromDate=" +
      data.fromDate +
      "&toDate=" +
      data.toDate;
    await download(url, login);
  }
);

export const searchProfile = createAsyncThunk(
  "searchProfile",
  async (data, login) => {
    const url = baseUrl + "/viewProfile";
    const result = await postDataWithLogin(data, url, login);
    return result;
  }
);
export const saveProfile = createAsyncThunk(
  "saveProfile",
  async (data, login) => {
    const url = baseUrl + "/saveProfile";
    const result = await postDataWithLogin(data, url, login);
    return result;
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    user: "",
    loading: true,
    error: null,
    login: "",
    profile: "",
    navigateTo: "",
  },
  extraReducers: (builder) => {
    ////<..............For Search by phone..............>/////
    builder.addCase(search.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(search.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      if (state.user && state.user.isError === "Y")
        state.error = state.user.errorList;
    });

    builder.addCase(search.rejected, (state, action) => {
      state.loading = false;
      state.error = [action.payload];
    });
    ////<..............For save ..............>/////
    builder.addCase(save.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(save.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      if (state.user && state.user.isError === "Y")
        state.error = state.user.errorList;
    });

    builder.addCase(save.rejected, (state, action) => {
      state.loading = false;
      state.user = [action.payload];
    });
    ////<..............For login ..............>/////
    builder.addCase(callLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(callLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.login = action.payload;
      if (state.login && state.login.isError === "Y")
        state.error = state.login.errorList;
    });

    builder.addCase(callLogin.rejected, (state, action) => {
      state.loading = false;
      state.login = [action.payload];
    });

    ////<..............For search Profile ..............>/////
    builder.addCase(searchProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
      if (state.profile && state.profile.isError === "Y")
        state.error = state.profile.errorList;
    });

    builder.addCase(searchProfile.rejected, (state, action) => {
      state.loading = false;
      state.profile = [action.payload];
    });

    ////<..............For save Profile ..............>/////
    builder.addCase(saveProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(saveProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
      if (state.profile && state.profile.isError === "Y")
        state.error = state.profile.errorList;
    });

    builder.addCase(saveProfile.rejected, (state, action) => {
      state.loading = false;
      state.profile = [action.payload];
    });

    ////<..............For save visisting ..............>/////
    builder.addCase(saveVisiting.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(saveVisiting.fulfilled, (state, action) => {
      state.loading = false;
      let data = action.payload;
      if (data && data.isError === "Y") state.error = data.errorList;
      else state.navigateTo = data.id;
    });

    builder.addCase(saveVisiting.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
export default userDetail.reducer;

async function getData(url) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const result = await response.json();
  return result;
}

async function postData(datas, url) {
  console.log(datas);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(datas),
  });

  const result = await response.json();
  console.log(result);

  return result;
}

async function postDataWithLogin(datas, url, login) {
  console.log(login);
  console.log(datas);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(datas),
  });

  const result = await response.json();
  console.log(result);

  return result;
}

async function getCall(url, login) {
  console.log(login);
  console.log(url);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/pdf",
    },
  });
}
async function download(url, login) {
  fetch(url).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      let date = new Date().getDate(); //To get the Current Date
      let month = new Date().getMonth() + 1; //To get the Current Month
      let year = new Date().getFullYear(); //To get the Current Year
      let hours = new Date().getHours(); //To get the Current Hours
      let min = new Date().getMinutes(); //To get the Current Minutes
      let sec = new Date().getSeconds(); //To get the Current Seconds

      alink.download =
        "Visit_Summary_" +
        date +
        month +
        year +
        "_" +
        hours +
        min +
        sec +
        ".pdf";
      alink.click();
    });
  });
}

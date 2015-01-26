app.store = {};


app.store.HispanicM = [];
app.store.MultiracialM = [];
app.store.CaucasianM = [];
app.store.BlackM = [];
app.store.AsianM = [];

app.store.HispanicF = [];
app.store.MultiracialF = [];
app.store.CaucasianF = [];
app.store.BlackF = [];
app.store.AsianF = ['1'];


app.store.Hispanic = [];
app.store.Multiracial = [];
app.store.Caucasian = [];
app.store.Black = [];
app.store.Asian = [];

app.store.Hispanic = app.store.HispanicM.concat(app.store.HispanicF);
app.store.Caucasian = app.store.CaucasianM.concat(app.store.CaucasianF);
app.store.Multiracial = app.store.MultiracialM.concat(app.store.MultiracialF);
app.store.Black = app.store.BlackM.concat(app.store.BlackF);
app.store.Asian = app.store.AsianM.concat(app.store.AsianF);


app.store.allM = [];
app.store.allM = app.store.allM.concat(app.store.HispanicM);
app.store.allM = app.store.allM.concat(app.store.MultiracialM);
app.store.allM = app.store.allM.concat(app.store.CaucasianM);
app.store.allM = app.store.allM.concat(app.store.BlackM);
app.store.allM = app.store.allM.concat(app.store.AsianM);

app.store.allF = [];
app.store.allF = app.store.allF.concat(app.store.HispanicF);
app.store.allF = app.store.allF.concat(app.store.MultiracialF);
app.store.allF = app.store.allF.concat(app.store.CaucasianF);
app.store.allF = app.store.allF.concat(app.store.BlackF);
app.store.allF = app.store.allF.concat(app.store.AsianF);

app.store.all = [];
app.store.all = app.store.allM.concat(app.store.allF);
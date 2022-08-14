"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyChart = void 0;
const cdk8s_1 = require("cdk8s");
class MyChart extends cdk8s_1.Chart {
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        // define resources here
    }
}
exports.MyChart = MyChart;
const app = new cdk8s_1.App();
new MyChart(app, 'cdk8s-sample');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaUNBQStDO0FBRS9DLE1BQWEsT0FBUSxTQUFRLGFBQUs7SUFDaEMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxRQUFvQixFQUFHO1FBQy9ELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLHdCQUF3QjtJQUUxQixDQUFDO0NBQ0Y7QUFQRCwwQkFPQztBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksV0FBRyxFQUFFLENBQUM7QUFDdEIsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0IHsgQXBwLCBDaGFydCwgQ2hhcnRQcm9wcyB9IGZyb20gJ2NkazhzJztcblxuZXhwb3J0IGNsYXNzIE15Q2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDaGFydFByb3BzID0geyB9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBkZWZpbmUgcmVzb3VyY2VzIGhlcmVcblxuICB9XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbm5ldyBNeUNoYXJ0KGFwcCwgJ2NkazhzLXNhbXBsZScpO1xuYXBwLnN5bnRoKCk7XG4iXX0=
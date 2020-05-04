describe("the bill with settings factory function", function() {
    it("should be able to set call cost", function() {
        var settingsBill = billWithSettings();
        settingsBill.setCallCost(1.85),
            assert.equal(1.85, settingsBill.getCallCost());
        var settingsBill2 = billWithSettings();
        settingsBill.setCallCost(2.75),
            assert.equal(2.75, settingsBill.getCallCost());
    })
    it("should be able to set sms cost", function() {
        var settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.85),
            assert.equal(0.85, settingsBill.getSmsCost());
        var settingsBill2 = billWithSettings();
        settingsBill.setSmsCost(0.75),
            assert.equal(0.75, settingsBill.getSmsCost());
    })
    it("should be able to set call and sms cost", function() {
        var settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.85);
        settingsBill.setCallCost(1.85);
        assert.equal(0.85, settingsBill.getSmsCost());
        assert.equal(1.85, settingsBill.getCallCost());
    })
    it("should be able to set the warning level", function() {
        var settingsBill = billWithSettings();
        settingsBill.setWarningLevel(30),
            assert.equal(30, settingsBill.getWarningLevel());
        var settingsBill2 = billWithSettings();
        settingsBill.setWarningLevel(1),
            assert.equal(1, settingsBill.getWarningLevel());
    })
    it("should be able to set the critical level", function() {
        var settingsBill = billWithSettings();
        settingsBill.setCriticalWarning(50),
            assert.equal(50, settingsBill.getCriticalWarning());
        var settingsBill2 = billWithSettings();
        settingsBill.setCriticalWarning(40),
            assert.equal(40, settingsBill.getCriticalWarning());
    })
})
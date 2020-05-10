describe("the bill with settings factory function", function() {
    describe("set values", function() {
        it("should be able to set call cost", function() {
            var settingsBill = billWithSettings();
            settingsBill.setCriticalWarning(10)
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
        it("should be able to set warning and critical level", function() {
            var settingsBill = billWithSettings();
            settingsBill.setWarningLevel(30);
            settingsBill.setCriticalWarning(50);
            assert.equal(30, settingsBill.getWarningLevel());
            assert.equal(50, settingsBill.getCriticalWarning());
        })
    })
    describe("use values", function() {
        it("should be able to use the call cost set", function() {
            var settingsBill = billWithSettings();
            settingsBill.setCriticalWarning(10)
            settingsBill.setCallCost(2.25);
            settingsBill.setSmsCost(0.85);
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal(6.75, settingsBill.getTotalCost());
            assert.equal(6.75, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());

        });
        it("should be able to use the call cost set for 2 calls at line 1.35 each", function() {
            var settingsBill = billWithSettings();
            settingsBill.setCriticalWarning(10)
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal(2.70, settingsBill.getTotalCost());
            assert.equal(2.70, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());

        });
        it("should be able to send 2 sms's at 0.85 each", function() {
            var settingsBill = billWithSettings();
            settingsBill.setCriticalWarning(10)
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
            settingsBill.sendSms();
            settingsBill.sendSms();
            assert.equal(1.70, settingsBill.getTotalCost());
            assert.equal(0.00, settingsBill.getTotalCallCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());

        });
        it("should be able to send 2 sms's at 0.85 each and make a call at 1.35", function() {
            var settingsBill = billWithSettings();
            settingsBill.setCriticalWarning(10)
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();
            assert.equal(3.05, settingsBill.getTotalCost());
            assert.equal(1.35, settingsBill.getTotalCallCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());

        });
    });
    describe("warning and critical level", function() {
        it("should return a class name if warning level is reached", function() {
            var settingsBill = billWithSettings();
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5);
            settingsBill.setCriticalWarning(10);
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal("warning", settingsBill.totalClassName());

        });
        it("should return a class name if critical level is reached", function() {
            var settingsBill = billWithSettings();
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(15);
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal("critical", settingsBill.totalClassName());

        });
        it("should stop  the Total Call cost from increasing when the critical level is reached", function() {
            var settingsBill = billWithSettings();
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setCriticalWarning(10);
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal("critical", settingsBill.totalClassName());
            assert.equal("10", settingsBill.getTotalCallCost());

        });
        it("should allow the total to increase after reaching the critical level and then updating the critical level", function() {
            var settingsBill = billWithSettings();
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(8);
            settingsBill.setCriticalWarning(10);
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal("critical", settingsBill.totalClassName());
            assert.equal("10", settingsBill.getTotalCallCost());
            settingsBill.setCriticalWarning(20);
            assert.equal("warning", settingsBill.totalClassName());
            settingsBill.makeCall();
            settingsBill.makeCall();
            assert.equal("15", settingsBill.getTotalCallCost());




        });
    });


})
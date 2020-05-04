function billWithSettings() {
    var totalCallCost = 0;
    var totalSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalWarningLevel = 0;

    function setCallCost(callCost) {
        totalCallCost = callCost;
    }

    function getCallCost() {
        return totalCallCost
    }

    function setSmsCost(smsCost) {
        totalSmsCost = smsCost;
    }

    function getSmsCost() {
        return totalSmsCost
    }

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel
    }

    function setCriticalWarning(criticalWarning) {
        theCriticalWarningLevel = criticalWarning;
    }

    function getCriticalWarning() {
        return theCriticalWarningLevel
    }
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalWarning,
        getCriticalWarning,
    }

}
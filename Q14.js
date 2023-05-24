// check if user is logged in OR subscribed 

function isLoggedInOrSubscribed(logVal, subVal) {
    if ((logVal === 'LOGGED_IN') || (subVal === 'SUBSCRIBED')) {
        return true
    }
    else {
        return false
    }
}

console.log(isLoggedInOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
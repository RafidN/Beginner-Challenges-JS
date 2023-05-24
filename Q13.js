//take two strings, check if someone is "LOGGED_IN" && "SUBSCRIBED"

function isLoggedInAndSubscribed(logVal, subVal) {
    if ((logVal === 'LOGGED_IN') && (subVal === 'SUBSCRIBED')) {
        return true
    }
    else {
        return false
    }
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
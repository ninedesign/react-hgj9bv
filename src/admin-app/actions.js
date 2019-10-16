import $ from 'jquery';

// setup all calls to include credentials
$.ajaxSetup({
    headers: {
        'Content-Type': 'application/json'
    },
    xhrFields: {
        withCredentials: true
    }
});

export function getAccountInfo() {
    return $.ajax({
        url: `${process.env.API_BASE_URL}/myaccount`,
    });
}

export function getToken() {
    return $.ajax({
        url: `${process.env.API_BASE_URL}/XsrfToken`,
    }).then((res) => {
        // set token on headers once received
        $.ajaxSetup({
            headers: { [res.tokenName]: res.token }
        });
        return res;
    });
}

export function getValues() {
    return $.ajax({
        headers: {
            'pragma': 'no-cache',
            'cache-control': 'no-header'
        },
        url: `${process.env.API_BASE_URL}/values`,
    });
}

export function postValue(data) {
    return $.ajax({
        type: 'POST',
        url: `${process.env.API_BASE_URL}/values`,
        data: JSON.stringify(data)
    });
}

export function getValueById(id) {
    return $.ajax({
        url: `${process.env.API_BASE_URL}/values/${id}`,
    });
}


export function updateValueById(data) {
    return $.ajax({
        type: 'PUT',
        url: `${process.env.API_BASE_URL}/values/${data.id}`,
        data: JSON.stringify(data)
    });
}

export function deleteById(data) {
    return $.ajax({
        type: 'DELETE',
        url: `${process.env.API_BASE_URL}/values/${data.id}`
    });
}

export function writeLog(data) {
    return $.ajax({
        type: 'POST',
        url: `${process.env.API_BASE_URL}/logs`,
        data: JSON.stringify(data)
    });
}

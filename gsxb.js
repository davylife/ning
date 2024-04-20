var body = $response.body;

body = body.replace(/vipEndTimestamp":\d+/g, 'vipEndTimestamp":3333333333333');

body = body.replace(/"vipEndTime":"\d+/g, '"vipEndTime":"2099');

$done({ body });
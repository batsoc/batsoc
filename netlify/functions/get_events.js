const eventbrite = require('eventbrite').default

const TOKEN = 'C5YS7CFT2MCQKGEQMAYO'
const ORGANIZATION_ID = '528067544369'

exports.handler = async function (event, context, callback) {
  const sdk = eventbrite({ token: TOKEN })

  var orderBy = event.queryStringParameters.order_by || 'start_asc'
  var timeFilter = event.queryStringParameters.time_filter || 'current_future'
  var pageSize = event.queryStringParameters.page_size || 9

  // See: https://www.eventbrite.com/developer/v3/endpoints/users/#ebapi-get-users-id
  // See https://www.eventbrite.com/platform/api#/reference/event/list/list-events-by-organization
  var res = await sdk.request(
    `/organizations/${ORGANIZATION_ID}/events` +
      `?order_by=${orderBy}&time_filter=${timeFilter}&page_size=${pageSize}` +
      `&expand=venue&status=live,started,completed,canceled,ended`
  )

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(res),
  })
}

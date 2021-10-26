var anything = new RegExp(' ')

  var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
  const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var plk_here = new Date().toLocaleDateString(get_localized_date)

                                                                                                                                                                                                                                                                                                module.exports = {
                                                                                                                                                                                                                                                                                                               anything: anything,
                                                                                                                                                                                                                                                                                                               plk_say: plk_say,
                                                                                                                                                                                                                                                                                                               plk_here: plk_here
                                                                                                                                                                                                                                                                                                               }

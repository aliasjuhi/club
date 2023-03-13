const router = require('express').Router();
const axios = require("axios");



router.get('/matches/:gamer/:oldal', async (req, res) => {
    console.log('hit api server')
    let { gamer, oldal } = req.params;
    console.log('gamer', gamer);
    console.log('oldal', oldal);
    gamer = gamer.replace('#', '%23')
    console.log('gamer', gamer);




    const settings = {
		method: 'get',
		url: `https://my.callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/${oldal}/gamer/${gamer}/matches/wz/start/0/end/0/details`,
		headers: { 
				'Cookie': 'ACT_SSO_COOKIE=NTEwMTM5NTIxNjQ1MzU3NTkxNjoxNjcxODk3NzQxNzM0OjU2ZmNmMmY3MDk5NGEyNmVhYmEwYmU1MzI3ZWU5NzEw; ACT_SSO_COOKIE_EXPIRY=1671897741734; atkn=eyJhbGciOiAiQTEyOEtXIiwgImVuYyI6ICJBMTI4R0NNIiwgImtpZCI6ICJ1bm9fcHJvZF9sYXNfMSJ9.4Pxop8kOEpcb2RrnHy9bGQyNnOHe-eA_jUtVC_Y8GEPpTo7KEWHBZw.UIS1Q54GQc7-l3vM.LU0d4BxO0d2FckOFHyuQIqtLsaAuvXYwkNpvK52i9AD7K01IoM2yQoqPKv4B6LneHmUX0AE6NPGDf_aZMTUu1mMOjnu_-zQTzd7pIYo63sDivxI5pfh2QiS9QMP1nr0DHv_2RCFa1SkD0_yjtVHXwJPFW1dBEz8IfIb_n1Bf9IjnwJkPddRrOAe2f0M5QSbZhPKSKRWNYDDQXetEbMkEjFea0UfXig-BaM5MjyK6fYSpEdJfx_lqjPvJRrtcNOTfe1wWvV9Mm0nYMqNU706gJ8Y3zezfhLJWMDkKeWVcNlQlqm1dV__pvbxjnXowSfafpiJafVpszoMY5miqozGmiEXmBS9H6iRFjAu9MpLBflTyIZUcJ5smtAgE1zqqOPf-v9O133n9ex-7Y7gMbDwR3sqQyNCS9tUJFcxG9taZjl0cbsgN2lOw6bwOG4mki5jyOnkYAJ8yxdQ2yDbBaMMrq_FNvEY.WqvmQJnFxOPQWMrnx-w7dQ;; ak_bmsc=A5A6BF42C0B2DD7026F281C72A15924C~000000000000000000000000000000~YAAQfa0TAoSC5xWFAQAAz28jHBISaymz/7nbxj9tgDK4hNkYs0vUzvOaBIeeToXn5LdWAqY8UjKgFwrU4K+ZQqzldOQbhB4ZvYiPyhdPQBaSt0PtPgiqUIQImZBot5K3rQDMg+oFN40jq8SFm1cJCChzRga+8JY4JGPEQ92VdopCdj3WJviywVLERcdJ70VVYX1MZJcEpZ0Z6Lt5KODiM9Nk0prTV63joPTejUsmlUVcD/+sZtkq20ikNilDq7dw6E+kXXBvGiaP1f/y5p/lMBuy9lP6vdfAX0rYfiqrOjIHtiLbNoKAGM7dwQ4vJoZyWlRMYQJdvKN53IERQZm2GVqX4PLdgsT4QoCVo+ktCypGRwsc/nmt/W2MXHam2kw=; bm_sv=21E4893541E52E116F905B2B27041979~YAAQfa0TAqOD5xWFAQAApAkpHBLBu8HhrstW2RDkIxK8MYA3Y2eG9G0YNFKDfVrJpOSi49l4PaYI6Ywf674xDLdrHkgObApL1sjneWMSyOTJUrQjkNj9Kmyr0dUDFn3+9KKrCOAZxbTvApfAOVqpQMIa8f13rjs5OW6uz67GtVhp0mGHT+NWMpOP9qWL/VnEqYh+w/0pKthI5ZVlZFqj9AgmyPkbt5D12H4zTkMlfZ21qRzWRN2ITdnGx4kL6QufcExlFw==~1; API_CSRF_TOKEN=db98e8cd-982f-41ad-b32b-ee00db22fa3f'
		},
     };  

      axios.request(settings).then(function (response) {
          console.log(response.data);
          res.json(response.data);
      }).catch(function (error) {
          console.log(error.message);
      });

});





router.get('/search/:player/:site', async (req, res) => {
    console.log('hit api server')
    let { player, site } = req.params;
    console.log('player', player);
    console.log('site', site);
    player = player.replace('?', '?')
    console.log('player', player);


    const config = {
      method: 'get',
      url: `https://my.callofduty.com/api/papi-client/crm/cod/v2/platform/${site}/username/${player}/search`,
      headers: { 
              'X-CSRF-TOKEN': '13f0b366-7d9b-4967-9a0b-c21f19aa1df0', 
              'Cookie': 'API_CSRF_TOKEN=13f0b366-7d9b-4967-9a0b-c21f19aa1df0; ACT_SSO_COOKIE=NTEwMTM5NTIxNjQ1MzU3NTkxNjoxNjc2ODI4OTk3NjU1OmQyNzY0NGY3Mjg4MmFmOTIzOGNmM2E1ZmRhYmE0ZDky; ACT_SSO_COOKIE_EXPIRY=1676828997655; atkn=eyJhbGciOiAiQTEyOEtXIiwgImVuYyI6ICJBMTI4R0NNIiwgImtpZCI6ICJ1bm9fcHJvZF9sYXNfMSJ9.1TuygAvNxZXnrNQU6AGYcNSDw2pV-kzmuvdjxsIGepaYi5quB12GSg.Luf1TXTyufKCLokn.FXFyJnlVbteoc7nAsUZWmwHpnX4HPNo1IJQGEcEFr4y4glH6nq29Dy1xbGQRMHoswlNFW7gt3Ze6Cp3b6S-2lkXAO4L2ok85VNqv-iZuQGI7kECBG4VC9Q_hi2aTUoC3AIaXmlS6SZydZWhfrrzC6Tp1aiuIIQSAHHS2lI2q-DXsy81kF-zLF9mCEW21qPQCo3k02_ciduNVK8TMSwA2uXuf6dh_sUqBDkblFmOt4vv1OfBMfixWvr_OiaXnySVceHKGImWb3uGwEDxTqPiTcgGykcMD_wZB4g51zqqE6YXm9SOAcXTcmhN9DDar8UXsJKvMThu2aiOAOsUp1x2JskWf1zDMQVhcqbZRMQqWMvtA6AreQTRcVF4sXK1vtLEHczao6OCIieTA0SPnBEX0Ykv7-tdLWCqeEnhcw0Kv6C3JtgpzHIyhEcHd8HdARLg0P_YAj9QZ7SB7ApxJRt4cRYyYqFA.3g4Z-vpCte5Q8BpTkWtqAw;; _abck=4CFB270FF80E17493163BA49D03DF476~-1~YAAQTrkTAu7+GxaGAQAAZWCEIQlHTkMnKiffZsdeJLCCHsDrwU5xvdneXzTf0sG8DO24mXnE4sVDhNghqFR9iF82cq6Ba7C3iWPAoe5n+Uf77nzleNzxtu2zp9UNwR36qCMtrRuMBLIpmGq5zyxlYh24IfGmr67y45O8UAKXsZq+0u+aQbYFncuX0MZmVhFDh/KqEbqNASqfJvc+32MF9aVBJyro7EGIdilrGlpxXNVITIaUnzufEKGCnkrq3BtBeHcKdQ5L0EG+mdLJf1PkaMCtnRmrdx4WFBiZpRAF4CjjjA3zzMAN46B1M6nkNTshmnrvfkB/UcJkdPtEsajhxnF70RAyWVUnc8WLTAuPvl0V2a+Plzmc7dESvY1UB2nDBOt64v0E0BFovHk=~-1~-1~-1; ak_bmsc=5C1731247C04E3272EFBA3F1C57B3C62~000000000000000000000000000000~YAAQbbkTAqKc9iaGAQAAQzYMKBIq10rMc2BVwxTZwAaVQBp0KfAg3hnpw3G8ukiKqHLds81FxAsMoxpXiiwZo6oeXEiUVtOdIkD2RDAYdV4raRGmQp4Tr8wI/yBJY0NjYsNFqh3L9SPGKkhlMWeVmmedaMItNEhBM/EK6ZzP640bajFdLK00k6uYlRURev37w8utgxpqhdRoqwqp9si4kfLD9WlCs4AQ0Mn2uZoob7ts8C3kXG9wgEwKHn6uEu649e6cREaaVdiUzEvSqys1QFhm6qsJ0GgOU4kN1nuV5+wVAjxmVs+7YYLl9Tq/EldN3kcMEQ9T9ZyTTqp/L03b1+Ozz5g0wtrqnrfNX7WgANKjeINRqc9UyfmsfvvFC08=; ssoDevId=6f42251ec9744811a6f39c9c136d264e'
            },
       };  
      
      axios.request(config).then(function (response) {

          console.log(response.data);

          res.json(response.data);
          
      }).catch(function (error) {
          console.error(error);
      });
});



router.get('/api/:user/:platform', async (req, res) => {
    console.log('hit api server')
    let { user, platform } = req.params;
    console.log('user', user);
    console.log('platform', platform);
    user = user.replace('#', '%23')
    console.log('user', user);




    const options = {
		method: 'get',
		url: `https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/${platform}/gamer/${user}/profile/type/mw`,
		headers: { 
				'Cookie': 'ACT_SSO_COOKIE=NTEwMTM5NTIxNjQ1MzU3NTkxNjoxNjcxODk3NzQxNzM0OjU2ZmNmMmY3MDk5NGEyNmVhYmEwYmU1MzI3ZWU5NzEw; ACT_SSO_COOKIE_EXPIRY=1671897741734; atkn=eyJhbGciOiAiQTEyOEtXIiwgImVuYyI6ICJBMTI4R0NNIiwgImtpZCI6ICJ1bm9fcHJvZF9sYXNfMSJ9.4Pxop8kOEpcb2RrnHy9bGQyNnOHe-eA_jUtVC_Y8GEPpTo7KEWHBZw.UIS1Q54GQc7-l3vM.LU0d4BxO0d2FckOFHyuQIqtLsaAuvXYwkNpvK52i9AD7K01IoM2yQoqPKv4B6LneHmUX0AE6NPGDf_aZMTUu1mMOjnu_-zQTzd7pIYo63sDivxI5pfh2QiS9QMP1nr0DHv_2RCFa1SkD0_yjtVHXwJPFW1dBEz8IfIb_n1Bf9IjnwJkPddRrOAe2f0M5QSbZhPKSKRWNYDDQXetEbMkEjFea0UfXig-BaM5MjyK6fYSpEdJfx_lqjPvJRrtcNOTfe1wWvV9Mm0nYMqNU706gJ8Y3zezfhLJWMDkKeWVcNlQlqm1dV__pvbxjnXowSfafpiJafVpszoMY5miqozGmiEXmBS9H6iRFjAu9MpLBflTyIZUcJ5smtAgE1zqqOPf-v9O133n9ex-7Y7gMbDwR3sqQyNCS9tUJFcxG9taZjl0cbsgN2lOw6bwOG4mki5jyOnkYAJ8yxdQ2yDbBaMMrq_FNvEY.WqvmQJnFxOPQWMrnx-w7dQ;; ak_bmsc=A5A6BF42C0B2DD7026F281C72A15924C~000000000000000000000000000000~YAAQfa0TAoSC5xWFAQAAz28jHBISaymz/7nbxj9tgDK4hNkYs0vUzvOaBIeeToXn5LdWAqY8UjKgFwrU4K+ZQqzldOQbhB4ZvYiPyhdPQBaSt0PtPgiqUIQImZBot5K3rQDMg+oFN40jq8SFm1cJCChzRga+8JY4JGPEQ92VdopCdj3WJviywVLERcdJ70VVYX1MZJcEpZ0Z6Lt5KODiM9Nk0prTV63joPTejUsmlUVcD/+sZtkq20ikNilDq7dw6E+kXXBvGiaP1f/y5p/lMBuy9lP6vdfAX0rYfiqrOjIHtiLbNoKAGM7dwQ4vJoZyWlRMYQJdvKN53IERQZm2GVqX4PLdgsT4QoCVo+ktCypGRwsc/nmt/W2MXHam2kw=; bm_sv=21E4893541E52E116F905B2B27041979~YAAQfa0TAqOD5xWFAQAApAkpHBLBu8HhrstW2RDkIxK8MYA3Y2eG9G0YNFKDfVrJpOSi49l4PaYI6Ywf674xDLdrHkgObApL1sjneWMSyOTJUrQjkNj9Kmyr0dUDFn3+9KKrCOAZxbTvApfAOVqpQMIa8f13rjs5OW6uz67GtVhp0mGHT+NWMpOP9qWL/VnEqYh+w/0pKthI5ZVlZFqj9AgmyPkbt5D12H4zTkMlfZ21qRzWRN2ITdnGx4kL6QufcExlFw==~1; API_CSRF_TOKEN=db98e8cd-982f-41ad-b32b-ee00db22fa3f'
		},
     };  

      axios.request(options).then(function (response) {
          console.log(response.data);
          res.json(response.data);
          
      }).catch(function (error) {
          console.log(error.message);
      });

});

module.exports = router;
import { franc } from 'franc'
import langs from 'langs'

function languageGuesser (text) {
  const languageCode = franc(text)
    return langs.where('3', languageCode).name

}

console.log(languageGuesser('bonjour je suis bob'))

import { Filter } from 'bad-words';

export function checkSpam(values: { name: string; email: string; message: string }): string {
  const filter = new Filter();

  if (values.name.trim().length < 5 || !values.name.includes(' ')) {
    return 'Please enter your full name (first and last).';
  }
  
  if (values.message.trim().length < 50) {
    return 'Please provide more details about your project (minimum 50 characters).';
  }
  
  if (/https?:\/\/|www\./i.test(values.message)) {
    return 'Please do not include links in your message.';
  }
  
  if (filter.isProfane(values.message)) {
    return 'Please remove inappropriate language from your message.';
  }
  return '';
}

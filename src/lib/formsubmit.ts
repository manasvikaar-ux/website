const FORMSUBMIT_BASE_URL = 'https://formsubmit.co';

export type FormSubmitOptions = {
  email: string;
  subject?: string;
  cc?: string;
  bcc?: string;
  redirect?: string;
  _subject?: string;
  _captcha?: 'true' | 'false';
  _autoresponse?: string;
  _template?: 'table' | 'grid';
};

export async function submitForm(
  data: Record<string, unknown>,
  options: FormSubmitOptions
) {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      formData.append(key, String(value));
    }
  });

  if (options.subject || options._subject) {
    formData.append(
      '_subject',
      options.subject || (options._subject as string)
    );
  }
  if (options.cc) formData.append('_cc', options.cc);
  if (options.bcc) formData.append('_bcc', options.bcc);
  if (options.redirect) formData.append('_redirect', options.redirect);
  if (options._captcha) formData.append('_captcha', options._captcha);
  if (options._autoresponse)
    formData.append('_autoresponse', options._autoresponse);
  if (options._template) formData.append('_template', options._template);

  const response = await fetch(`${FORMSUBMIT_BASE_URL}/${options.email}`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok && response.status !== 302 && response.status !== 200) {
    throw new Error('Form submission failed');
  }

  return true;
}

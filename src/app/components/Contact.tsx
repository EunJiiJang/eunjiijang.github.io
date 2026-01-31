import { Mail, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="pt-0 pb-16 sm:pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-5">
          <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-5 flex flex-col md:aspect-[2/1]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Marco</p>
                <div className="bg-gray-200/70 text-gray-900 px-5 py-3 rounded-2xl rounded-tl-sm max-w-md">
                  want to work together? just want to chat? send me a text here (no, for real)
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <div className="bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-tr-sm">
                sounds good 🙏
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-auto pt-4">
              <button className="p-2 text-gray-400 hover:text-gray-600" aria-label="Email">
                <Mail size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600" aria-label="Twitter">
                <Twitter size={20} />
              </button>
              <div className="flex-1 bg-white rounded-full px-4 py-2 text-gray-400">
                iMessage
              </div>
              <button className="p-2 text-gray-400 bg-gray-200 rounded-full" aria-label="Send">
                ↑
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-5 sm:aspect-square flex flex-col">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Marco Cornacchia</h3>
                  <p className="text-sm text-gray-500">hi@marco.fyi</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center">
                  <span className="text-sm font-semibold">M</span>
                </div>
              </div>
              <div className="mt-4 bg-white rounded-2xl p-4 text-sm text-gray-500">
                <p className="text-gray-700">To</p>
                <p className="text-gray-500">hi@marco.fyi</p>
                <p className="mt-3 text-gray-400">Let's Chat</p>
                <p className="text-gray-400">Say hello</p>
              </div>
              <a
                href="mailto:hi@marco.fyi"
                className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-full py-2 text-sm text-gray-700"
              >
                Email Me ↗
              </a>
            </div>

            <div className="bg-[#f7f7f9] rounded-3xl p-4 sm:p-5 sm:aspect-square flex flex-col">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">marco cornacchia</p>
                    <p className="text-xs text-gray-500">@marcofyi</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center">
                  <Twitter size={22} />
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                i get computers ‘puting ✶ ai design @figma ✶ prev @diagram
              </p>
              <a
                href="https://twitter.com/marcofyi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-full py-2 text-sm text-gray-700"
              >
                DM Me ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

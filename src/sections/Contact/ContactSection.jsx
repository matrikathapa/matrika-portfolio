import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import SectionWrapper from '../../components/SectionWrapper';
import { EASE_COZY, VIEWPORT_ONCE } from '../../utils/motion';

/* =========================================================
   SMALL DECORATIVE SPARKLE
========================================================= */

function Sparkle({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        select-none
        text-[#d97732]/55
        ${className}
      `}
    >
      ✦
    </span>
  );
}

/* =========================================================
   DESK ILLUSTRATION
========================================================= */

function DeskScene({ shouldReduce }) {
  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.75, ease: EASE_COZY }}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >
      {/* Soft background glow */}
      <div
        className="
          absolute
          left-1/2
          top-[48%]
          h-[420px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#e8a66d]/10
          blur-3xl
        "
      />

      {/* =================================================
          LEFT BOOK STACK/TULIP
      ================================================= */}

      <div
        className="
          absolute
          bottom-2
          left-[10px]
          hidden
          rotate-[40deg]
          sm:block
        "
      >
        <svg viewBox="0 0 48 48" fill="none" class="w-26 h-26" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 23v20" stroke="#785c48" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M24 37c-6-1-9-5-9-12 4 1 8 6 9 12z" fill="#f1ded0" stroke="#785c48" stroke-width="1.4" stroke-linejoin="round"/>
              <path d="M21 16c2-4 4-4 6 0 1 3-1 6-3 7-2-1-4-4-3-7z" fill="#fbd5bf" stroke="#785c48" stroke-width="1.4"/>
              <path d="M16 13c1 7 5 10 8 10-1-5-2-10-8-10z" fill="#f8c3a1" stroke="#785c48" stroke-width="1.6" stroke-linejoin="round"/>
              <path d="M32 13c-1 7-5 10-8 10 1-5 2-10 8-10z" fill="#f9cfb2" stroke="#785c48" stroke-width="1.6" stroke-linejoin="round"/>
        </svg>
      </div>

      {/* =================================================
          CHAMOMILE DAISY
      ================================================= */}

      <div
        className="
          absolute
          bottom-5
          right-[-10px]
          hidden
          rotate-[-30deg]
          sm:block
        "
      >
        <svg viewBox="0 0 48 48" fill="none" class="w-26 h-26" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 24v17c0 1-1 3-4 3" stroke="#785c48" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M24 33c4-1 6-3 6-7-4 0-6 4-6 7z" fill="#fae8d8" stroke="#785c48" stroke-width="1.4" stroke-linejoin="round"/>
                <circle cx="24" cy="13" r="4.2" fill="#fffdfa" stroke="#785c48" stroke-width="1.4"/>
                <circle cx="24" cy="23" r="4.2" fill="#fffdfa" stroke="#785c48" stroke-width="1.4"/>
                <circle cx="19" cy="18" r="4.2" fill="#fffdfa" stroke="#785c48" stroke-width="1.4"/>
                <circle cx="29" cy="18" r="4.2" fill="#fffdfa" stroke="#785c48" stroke-width="1.4"/>
                <circle cx="20.5" cy="14.5" r="4.2" fill="#fffdfa" stroke="#785c48" stroke-width="1.4"/>
                <circle cx="27.5" cy="14.5" r="4.2" fill="#fffdfa" stroke="#785c48" stroke-width="1.4"/>
                <circle cx="20.5" cy="21.5" r="4.2" fill="#fffdfa" stroke="#785c48" stroke-width="1.4"/>
                <circle cx="27.5" cy="21.5" r="4.2" fill="#fffdfa" stroke="#785c48" stroke-width="1.4"/>
                <circle cx="24" cy="18" r="4.2" fill="#f8d59d" stroke="#785c48" stroke-width="1.6"/>
        </svg>
      </div>
        
      {/* =================================================
          SMALL NOTEBOOK/CUPCAKE
      ================================================= */}

      <div
        className="
          absolute
          bottom-12
          left-[14%]
          hidden
          rotate-[-12deg]
          rounded-lg
          md:block
        "
      >
        <svg viewBox="0 0 48 48" fill="none" class="w-28 h-28" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 25l2.5 13h13l2.5-13H15z" fill="#edd2bd" stroke="#785c48" stroke-width="1.8" stroke-linejoin="round"/>
                <path d="M19 25l1.5 13m4-13v13m4-13l-1.5 13" stroke="#785c48" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M13 25c0-4 4-5 6-4 1-3 5-4 7-2 2-3 7-1 7 4 2 1 2 2-1 2H13z" fill="#fce5d6" stroke="#785c48" stroke-width="1.8" stroke-linejoin="round"/>
                <path d="M19 21c2-3 6-3 8 0" stroke="#785c48" stroke-width="1.3" stroke-linecap="round"/>
                <circle cx="24" cy="15" r="3.5" fill="#e26c51" stroke="#785c48" stroke-width="1.5"/>
                <path d="M24 12c1-3 4-4 6-3" stroke="#785c48" stroke-width="1.3" stroke-linecap="round"/>
                <circle cx="18" cy="23" r="0.8" fill="#d97736"/>
                <circle cx="29" cy="23" r="0.8" fill="#d97736"/>
          </svg>
      </div>

      {/* =================================================
          SMALL LAPTOP
      ==================================================== */}

      <div
        className="
          absolute
          bottom-[-8px]
          left-1/2
          hidden
          -translate-x-1/2
          md:block
        "
      >
        <svg viewBox="0 0 48 48" fill="none" class="w-38 h-35" xmlns="http://www.w3.org/2000/svg">
              <rect x="11" y="11" width="26" height="18" rx="2.5" fill="#fdf4ea" stroke="#785c48" stroke-width="1.8"/>
              <rect x="13.5" y="13.5" width="21" height="13" rx="1" fill="#fffdfa"/>
              <path d="M19 18l-2 2 2 2m10-4l2 2-2 2" stroke="#9f7f67" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="24" cy="20" r="1.5" fill="#f3af7c"/>
              <path d="M6 31h36l-3 6H9l-3-6z" fill="#f2e2d4" stroke="#785c48" stroke-width="1.8" stroke-linejoin="round"/>
              <rect x="21" y="32.5" width="6" height="3" rx="0.75" fill="#fdf6ef" stroke="#785c48" stroke-width="1"/>
        </svg>
      </div>

      {/* =================================================
          COFFEE MUG
      ================================================= */}

      <div
        className="
          absolute
          bottom-7
          right-[18%]
          hidden
          rotate-[20deg]
          md:block
        "
      >
        <svg viewBox="0 0 48 48" fill="none" class="w-36 h-36" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 13c1-2 0-3.5-1-4.5" stroke="#a4826b" stroke-width="1.4" stroke-linecap="round"/>
                    <path d="M14 17c0 8 4 13 11 13s11-5 11-13H14z" fill="#fcf0e8" stroke="#785c48" stroke-width="1.8" stroke-linejoin="round"/>
                    <path d="M36 19c3 0 4.5 2 4.5 4s-1.5 4-4.5 4" fill="none" stroke="#785c48" stroke-width="1.8" stroke-linecap="round"/>
                    <path d="M10 33c0 2 6 3.5 15 3.5s15-1.5 15-3.5H10z" fill="#f5dfce" stroke="#785c48" stroke-width="1.8" stroke-linejoin="round"/>
                    <path d="M20 17c0 4-3 5-3 8" stroke="#785c48" stroke-width="1.2" stroke-linecap="round"/>
                    <rect x="15" y="25" width="4.5" height="5.5" rx="1" fill="#fedbb6" stroke="#785c48" stroke-width="1"/>
                  </svg>
          <span className="absolute right-3 top-5 text-[8px] text-[#f6cf83]">
            ✦
          </span>
        </div>
    </motion.div>
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */

export default function ContactSection() {
  const shouldReduce = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      This currently handles the UI only.

      Later, this submit function can be connected to
      Formspree, EmailJS, a backend API, etc.
    */

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <SectionWrapper
      id="contact"
      aria-label="Contact Matrika"
      maxWidth="max-w-7xl"
      className="
        relative
        overflow-hidden
        border-t
        border-black/5
        bg-[#f8e5c4]
        dark:border-white/5
        dark:bg-[#150f18]
        py-16
        md:min-h-screen
        md:py-20
      "
    >
      {/* =================================================
          BACKGROUND DESK SCENE
      ================================================= */}

      <DeskScene shouldReduce={shouldReduce} />

      {/* Decorative sparkles */}
      <Sparkle className="left-[8%] top-20 text-sm" />
      <Sparkle className="right-[11%] top-28 text-xs" />
      <Sparkle className="left-[17%] bottom-28 text-[10px]" />
      <Sparkle className="right-[22%] bottom-24 text-sm" />

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
        "
      >
        {/* Heading */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.65, ease: EASE_COZY }}
          className="mb-9 text-center md:mb-10"
        >
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-[#a05d45]
              dark:text-[#e8a067]
            "
          >
            A LITTLE NOTE BEFORE YOU GO
          </p>

          <h2
            className="
              mt-3
              font-hand-custom
              text-4xl
              font-bold
              leading-tight
              text-[#673b51]
              dark:text-[#f5e8dc]
              sm:text-5xl
              md:text-6xl
            "
          >
            Leave a note for Matrika
            <span className="ml-2 text-[#d97732]">✦</span>
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#d97732]/40" />
            <span className="text-sm text-[#d97732]">♥</span>
            <span className="h-px w-16 bg-[#d97732]/40" />
          </div>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-[#715d56]
              dark:text-[#cdbdb4]
              sm:text-base
            "
          >
            Have a project idea, a question, or simply want to say hello?
            Leave me a little note.
          </p>
        </motion.div>

        {/* =================================================
            TORN PAPER FORM
        ================================================= */}

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, x: 36, rotate: 1.5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.75, ease: EASE_COZY, delay: 0.15 }}
          className="relative mx-auto max-w-2xl"
        >
          {/* Tape */}
          <div
            className="
              absolute
              -top-4
              left-1/2
              z-20
              h-9
              w-32
              -translate-x-1/2
              rotate-[-2deg]
              bg-[#e6c77d]/80
              shadow-sm
              backdrop-blur-sm
            "
          />

          {/* Paper shadow */}
          <div
            className="
              absolute
              inset-0
              translate-x-2
              translate-y-3
              rotate-[1deg]
              rounded-sm
              bg-[#d3b18c]/35
              dark:bg-black/50
              blur-sm
            "
          />

          {/* Paper */}
          <div
            className="
              relative
              rotate-[-0.6deg]
              overflow-hidden
              border
              border-[#dbc5a9]
              bg-[#fff9eb]
              px-6
              py-8
              shadow-[0_20px_50px_rgba(74,59,50,0.14)]
              dark:border-[#c77b42]/35
              dark:bg-[#221520]
              dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)]
              sm:px-10
              sm:py-10
            "
            style={{
              clipPath:
                'polygon(0% 1%, 4% 0%, 8% 1%, 13% 0%, 18% 1%, 24% 0%, 30% 1%, 36% 0%, 43% 1%, 49% 0%, 56% 1%, 62% 0%, 68% 1%, 74% 0%, 81% 1%, 87% 0%, 93% 1%, 100% 0%, 99% 97%, 94% 99%, 88% 98%, 81% 100%, 74% 98%, 67% 100%, 60% 98%, 53% 100%, 46% 98%, 39% 100%, 32% 98%, 25% 100%, 18% 98%, 11% 100%, 5% 98%, 0% 100%)',
            }}
          >
            {/* Paper decorations */}
            <Sparkle className="right-7 top-6 text-xs" />

            <span
              aria-hidden="true"
              className="
                absolute
                bottom-8
                left-7
                rotate-[-15deg]
                text-xl
                text-[#d97732]/30
              "
            >
              ♡
            </span>

            <form onSubmit={handleSubmit} className="relative z-10">
              {/* Form intro */}
              <div className="mb-7">
                <p
                  className="
                    font-hand-custom
                    text-2xl
                    font-bold
                    text-[#673b51]
                    dark:text-[#f5e8dc]
                  "
                >
                  Dear Matrika,
                </p>

                <p className="mt-1 text-xs text-[#806d65] dark:text-[#cdbdb4]">
                  Tell me what's on your mind...
                </p>
              </div>

              {/* =================================================
                  NAME
              ================================================= */}

              <div className="mb-5">
                <label
                  htmlFor="contact-name"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#9a604d]
                    dark:text-[#e8a067]
                  "
                >
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What should I call you?"
                  className="
                    w-full
                    border-b
                    border-[#cdb79d]
                    bg-transparent
                    px-1
                    py-3
                    text-sm
                    text-[#493d39]
                    outline-none
                    placeholder:text-[#a8988c]
                    transition-colors
                    duration-300
                    focus:border-[#d97732]
                    dark:border-[#d97732]/30
                    dark:text-[#f5e8dc]
                    dark:placeholder:text-[#a39eb2]/60
                    dark:focus:border-[#ffd166]
                  "
                />
              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div className="mb-5">
                <label
                  htmlFor="contact-email"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#9a604d]
                    dark:text-[#e8a067]
                  "
                >
                  Your email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Where can I write back?"
                  className="
                    w-full
                    border-b
                    border-[#cdb79d]
                    bg-transparent
                    px-1
                    py-3
                    text-sm
                    text-[#493d39]
                    outline-none
                    placeholder:text-[#a8988c]
                    transition-colors
                    duration-300
                    focus:border-[#d97732]
                    dark:border-[#d97732]/30
                    dark:text-[#f5e8dc]
                    dark:placeholder:text-[#a39eb2]/60
                    dark:focus:border-[#ffd166]
                  "
                />
              </div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className="mb-7">
                <label
                  htmlFor="contact-message"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#9a604d]
                    dark:text-[#e8a067]
                  "
                >
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your little note here..."
                  className="
                    w-full
                    resize-none
                    border-b
                    border-[#cdb79d]
                    bg-transparent
                    px-1
                    py-3
                    text-sm
                    leading-6
                    text-[#493d39]
                    outline-none
                    placeholder:text-[#a8988c]
                    transition-colors
                    duration-300
                    focus:border-[#d97732]
                    dark:border-[#d97732]/30
                    dark:text-[#f5e8dc]
                    dark:placeholder:text-[#a39eb2]/60
                    dark:focus:border-[#ffd166]
                  "
                />
              </div>

              {/* =================================================
                  SUBMIT AREA
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  items-start
                  justify-between
                  gap-5
                  sm:flex-row
                  sm:items-center
                "
              >
                <div>
                  {submitted ? (
                    <p
                      className="
                        font-hand-custom
                        text-sm
                        font-semibold
                        text-[#66804f]
                        dark:text-[#88b06d]
                      "
                    >
                      Your note is tucked away safely. ✦
                    </p>
                  ) : (
                    <p
                      className="
                        font-hand-custom
                        text-sm
                        text-[#806d65]
                        dark:text-[#cdbdb4]
                      "
                    >
                      I'll get back to you soon. ♡
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#d97732]
                    px-6
                    py-3
                    text-xs
                    font-semibold
                    text-white
                    shadow-[0_8px_20px_rgba(217,119,50,0.20)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#c5682b]
                    hover:shadow-[0_12px_25px_rgba(217,119,50,0.28)]
                    active:translate-y-0
                  "
                >
                  Send the note
                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* =================================================
            CLOSING LINE
        ================================================= */}

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.65, ease: EASE_COZY, delay: 0.2 }}
          className="mt-9 text-center"
        >
          <p
            className="
              font-hand-custom
              text-base
              text-[#704b4c]
              dark:text-[#d4aba2]
              sm:text-lg
            "
          >
            I'll get back to you before the coffee gets cold. ☕
          </p>

          <div className="mt-3 text-xs tracking-widest text-[#d97732]/60 dark:text-[#e8a067]">
            ✦ &nbsp; THANKS FOR STOPPING BY &nbsp; ✦
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
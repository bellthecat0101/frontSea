import { X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
type Props = {
  checked: boolean;
  onChange: (val: boolean) => void;
};

export default function TermsAgreementCheckbox({ checked, onChange }: Props) {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="text-sm text-gray-700">
      <label className="flex justify-end items-center space-x-2 pt-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="text-xs ">
          我同意網站
          <button
            type="button"
            className="text-blue-500 underline ml-1"
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(true);
            }}
          >
            服務與隱私政策
          </button>
        </span>
      </label>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-md w-[90%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-red-500"
              onClick={() => setShowModal(false)}
            >
              <X />
            </button>
            <h2 className="text-lg font-semibold mb-3">服務與隱私政策</h2>
            <p className="text-sm text-gray-600 max-h-[300px] overflow-y-auto">
              <p>{t("login.terms.intro")}</p>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <p key={i}>
                  <strong>{t(`login.terms.section${i}.title`)}</strong>
                  <br />
                  {t(`login.terms.section${i}.content`)}
                </p>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

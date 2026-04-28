import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import resumePdf from "@/assets/CV ATS - Bagus Subagja.pdf";

interface ResumePreviewProps {
  open: boolean;
  onClose: () => void;
}

const ResumePreview = ({ open, onClose }: ResumePreviewProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-3xl h-[85vh] glass-card rounded-2xl overflow-hidden flex flex-col"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <span className="text-sm font-medium text-foreground">Resume Preview</span>
            <div className="flex gap-2">
              <a
                href={resumePdf}
                download="CV ATS - Bagus Subagja.pdf"
                className="glass-button flex items-center gap-2 text-sm py-2 px-4"
              >
                <Download className="w-4 h-4" /> Download
              </a>
              <button onClick={onClose} className="glass-icon">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <iframe src={resumePdf} className="flex-1 w-full" title="Resume Preview" />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ResumePreview;

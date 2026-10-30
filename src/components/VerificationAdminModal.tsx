import React, { useState } from 'react';
import { initialVerificationLogs } from '../data/faqData';
import { VerificationLog } from '../types';
import { X, ShieldCheck, Plus, Check, Clock, Edit2 } from 'lucide-react';

interface VerificationAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationAdminModal: React.FC<VerificationAdminModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [logs, setLogs] = useState<VerificationLog[]>(initialVerificationLogs);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDate, setEditDate] = useState<string>('');
  const [editStatus, setEditStatus] = useState<VerificationLog['status']>('공식 확인 완료');
  const [editNote, setEditNote] = useState<string>('');

  if (!isOpen) return null;

  const handleStartEdit = (log: VerificationLog) => {
    setEditingId(log.id);
    setEditDate(log.lastChecked);
    setEditStatus(log.status);
    setEditNote(log.note);
  };

  const handleSaveEdit = (id: string) => {
    setLogs(logs.map(log => {
      if (log.id === id) {
        return {
          ...log,
          lastChecked: editDate,
          status: editStatus,
          note: editNote,
        };
      }
      return log;
    }));
    setEditingId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#0A1220] border border-[#C9A96E]/40 rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-white p-1 rounded-lg focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-800">
          <ShieldCheck className="w-6 h-6 text-[#C9A96E]" />
          <div>
            <h2 className="text-xl font-serif-display font-bold text-white">
              리서치 팩트체크 & 데이터 검증 관리 센터
            </h2>
            <p className="text-xs text-stone-400 font-mono mt-0.5">
              Editorial Verification Logs & Last Checked Dates (Admin Interface)
            </p>
          </div>
        </div>

        <div className="text-xs text-stone-300 leading-relaxed mb-6 p-3.5 bg-[#080A0F] rounded border border-stone-800">
          본 사이트의 모든 비교 정보(호이아나 140+ 테이블, 크라운 테이블 미니멈 비공시, 세부퍼시픽 직항 스케줄 등)는 객관적 출처를 바탕으로 팩트체킹되며, 관리자가 수시로 최신 규정을 재확인하여 반영합니다.
        </div>

        {/* Verification Logs Table */}
        <div className="space-y-4 mb-6">
          {logs.map((log) => {
            const isEditing = editingId === log.id;

            return (
              <div
                key={log.id}
                className="bg-[#080A0F] border border-stone-800/80 rounded-lg p-4 transition-all"
              >
                {isEditing ? (
                  <div className="space-y-3">
                    <div className="font-semibold text-sm text-white">{log.section}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="text-stone-400 block mb-1">최종 확인 날짜 (YYYY-MM-DD):</label>
                        <input
                          type="text"
                          value={editDate}
                          onChange={(e) => setEditDate(e.target.value)}
                          className="w-full bg-[#0A1220] border border-stone-700 px-3 py-1.5 rounded text-white font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-stone-400 block mb-1">검증 상태:</label>
                        <select
                          value={editStatus}
                          onChange={(e) => setEditStatus(e.target.value as VerificationLog['status'])}
                          className="w-full bg-[#0A1220] border border-stone-700 px-3 py-1.5 rounded text-white"
                        >
                          <option value="공식 확인 완료">공식 확인 완료</option>
                          <option value="공식 확인 필요">공식 확인 필요</option>
                          <option value="규정 재검토중">규정 재검토중</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-stone-400 block text-xs mb-1">에디터 검증 메모:</label>
                      <textarea
                        value={editNote}
                        onChange={(e) => setEditNote(e.target.value)}
                        rows={2}
                        className="w-full bg-[#0A1220] border border-stone-700 p-2 rounded text-xs text-white"
                      />
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-3 py-1.5 text-xs text-stone-400 hover:text-white"
                      >
                        취소
                      </button>
                      <button
                        onClick={() => handleSaveEdit(log.id)}
                        className="px-4 py-1.5 bg-[#C9A96E] hover:bg-[#DFC89B] text-[#080A0F] font-semibold text-xs rounded flex items-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5" />
                        저장 완료
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white">{log.section}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                          log.status === '공식 확인 완료'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-amber-950 text-amber-400 border border-amber-800'
                        }`}>
                          {log.status}
                        </span>
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed">{log.note}</p>
                      <div className="text-[11px] text-stone-500 font-mono flex items-center gap-3 pt-1">
                        <span>담당: {log.verifiedBy}</span>
                        <span>확인일: {log.lastChecked}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleStartEdit(log)}
                      className="shrink-0 p-1.5 text-stone-400 hover:text-[#C9A96E] border border-stone-800 rounded hover:border-[#C9A96E] transition-colors self-start sm:self-center"
                      title="항목 검증일 수정"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-stone-800 flex justify-between items-center text-xs text-stone-400">
          <span>모든 변경 사항은 즉시 브라우저 세션에 반영됩니다.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#080A0F] hover:bg-stone-800 text-stone-200 border border-stone-700 rounded transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

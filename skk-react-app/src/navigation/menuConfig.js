export const adminMenuItems = [
  { name: 'Dashboard', path: '/admin-dashboard', subject: 'dashboard' },
  {
    name: 'Data Master',
    subject: 'dataMaster',
    subMenu: [
      { name: 'Data LSP', path: '/admin/data-lsp', subject: 'dataLSP' },
      { name: 'Data Asosiasi', path: '/admin/data-asosiasi', subject: 'dataAsosiasi' },
      { name: 'Data LemDiklat', path: '/admin/data-lemdiklat', subject: 'dataLemdiklat' },
    ],
  },
  { name: 'Daftar LSP', path: '/daftar-lsp', subject: 'daftarLSP' },
  { name: 'Daftar Asosiasi', path: '/daftar-asosiasi', subject: 'daftarAsosiasi' },
  { name: 'Daftar Lembaga Diklat', path: '/daftar-lembaga-diklat', subject: 'daftarLembagaDiklat' },
];

export const userMenuItems = [
  { name: 'Dashboard', path: '/user-dashboard', subject: 'dashboard' },
  { name: 'Daftar LSP', path: '/daftar-lsp', subject: 'daftarLSP' },
  { name: 'Daftar Asosiasi', path: '/daftar-asosiasi', subject: 'daftarAsosiasi' },
  { name: 'Daftar Lembaga Diklat', path: '/daftar-lembaga-diklat', subject: 'daftarLembagaDiklat' },
];
